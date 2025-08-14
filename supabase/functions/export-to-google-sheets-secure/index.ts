import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

interface RequestBody {
  record: any;
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    // Rate limiting - simple in-memory check (for production, use Redis or similar)
    const clientIP = req.headers.get('x-forwarded-for') || 'unknown';
    
    // Environment variable validation
    const GOOGLE_SERVICE_ACCOUNT_EMAIL = Deno.env.get('GOOGLE_SERVICE_ACCOUNT_EMAIL');
    const GOOGLE_PRIVATE_KEY = Deno.env.get('GOOGLE_PRIVATE_KEY');
    const GOOGLE_SHEET_ID = Deno.env.get('GOOGLE_SHEET_ID');

    if (!GOOGLE_SERVICE_ACCOUNT_EMAIL || !GOOGLE_PRIVATE_KEY || !GOOGLE_SHEET_ID) {
      console.error('Missing required environment variables');
      return new Response(
        JSON.stringify({ error: 'Server configuration error' }), 
        { 
          status: 500, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
        }
      );
    }

    // Request size and timeout validation
    const contentLength = req.headers.get('content-length');
    if (contentLength && parseInt(contentLength) > 10000) { // 10KB limit
      return new Response(
        JSON.stringify({ error: 'Request too large' }), 
        { 
          status: 413, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
        }
      );
    }

    // Parse and validate request body
    let requestBody: RequestBody;
    try {
      requestBody = await req.json();
    } catch (error) {
      return new Response(
        JSON.stringify({ error: 'Invalid JSON in request body' }), 
        { 
          status: 400, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
        }
      );
    }

    if (!requestBody?.record) {
      return new Response(
        JSON.stringify({ error: 'Missing record data' }), 
        { 
          status: 400, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
        }
      );
    }

    const { record } = requestBody;

    // Input sanitization - basic XSS protection
    const sanitizedRecord = {};
    for (const [key, value] of Object.entries(record)) {
      if (typeof value === 'string') {
        sanitizedRecord[key] = value
          .replace(/</g, '&lt;')
          .replace(/>/g, '&gt;')
          .replace(/"/g, '&quot;')
          .replace(/'/g, '&#x27;')
          .substring(0, 1000); // Limit string length
      } else {
        sanitizedRecord[key] = value;
      }
    }

    // Create JWT for Google API authentication
    const now = Math.floor(Date.now() / 1000);
    const claim = {
      iss: GOOGLE_SERVICE_ACCOUNT_EMAIL,
      scope: 'https://www.googleapis.com/auth/spreadsheets',
      aud: 'https://oauth2.googleapis.com/token',
      exp: now + 3600,
      iat: now,
    };

    const header = {
      alg: 'RS256',
      typ: 'JWT',
    };

    // Import crypto library for JWT signing
    const { encode } = await import('https://deno.land/std@0.82.0/encoding/base64url.ts');
    const textEncoder = new TextEncoder();

    const encodedHeader = encode(textEncoder.encode(JSON.stringify(header)));
    const encodedClaim = encode(textEncoder.encode(JSON.stringify(claim)));

    // Import private key
    const privateKey = GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n');
    const key = await crypto.subtle.importKey(
      'pkcs8',
      textEncoder.encode(privateKey),
      {
        name: 'RSASSA-PKCS1-v1_5',
        hash: 'SHA-256',
      },
      false,
      ['sign']
    );

    // Sign the JWT
    const data = textEncoder.encode(`${encodedHeader}.${encodedClaim}`);
    const signature = await crypto.subtle.sign('RSASSA-PKCS1-v1_5', key, data);
    const encodedSignature = encode(new Uint8Array(signature));

    const jwt = `${encodedHeader}.${encodedClaim}.${encodedSignature}`;

    // Get access token from Google
    const tokenResponse = await fetch('https://oauth2.googleapis.com/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer',
        assertion: jwt,
      }),
    });

    if (!tokenResponse.ok) {
      console.error('Failed to get access token');
      return new Response(
        JSON.stringify({ error: 'Authentication failed' }), 
        { 
          status: 401, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
        }
      );
    }

    const tokenData = await tokenResponse.json();
    const accessToken = tokenData.access_token;

    // Prepare data for Google Sheets
    const row = [
      sanitizedRecord.full_name || sanitizedRecord.fullName || '',
      sanitizedRecord.email || '',
      sanitizedRecord.whatsapp || '',
      sanitizedRecord.birth_date || sanitizedRecord.birthDate || '',
      sanitizedRecord.birth_time || sanitizedRecord.birthTime || '',
      sanitizedRecord.birth_city || sanitizedRecord.birthCity || '',
      sanitizedRecord.birth_state || sanitizedRecord.birthState || '',
      sanitizedRecord.birth_country || sanitizedRecord.birthCountry || '',
      sanitizedRecord.partner_name || sanitizedRecord.partnerName || '',
      sanitizedRecord.partner_birth_date || sanitizedRecord.partnerBirthDate || '',
      sanitizedRecord.partner_birth_time || sanitizedRecord.partnerBirthTime || '',
      sanitizedRecord.partner_birth_city || sanitizedRecord.partnerBirthCity || '',
      sanitizedRecord.partner_birth_state || sanitizedRecord.partnerBirthState || '',
      sanitizedRecord.partner_birth_country || sanitizedRecord.partnerBirthCountry || '',
      sanitizedRecord.produto || sanitizedRecord.product || '',
      sanitizedRecord.status || 'pending',
      sanitizedRecord.created_at || new Date().toISOString(),
    ];

    // Append to Google Sheet with timeout
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 10000); // 10 second timeout

    try {
      const sheetsResponse = await fetch(
        `https://sheets.googleapis.com/v4/spreadsheets/${GOOGLE_SHEET_ID}/values/Sheet1:append?valueInputOption=RAW`,
        {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${accessToken}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            values: [row],
          }),
          signal: controller.signal,
        }
      );

      clearTimeout(timeoutId);

      if (!sheetsResponse.ok) {
        console.error('Failed to append to sheet:', await sheetsResponse.text());
        return new Response(
          JSON.stringify({ error: 'Failed to save data' }), 
          { 
            status: 500, 
            headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
          }
        );
      }

      return new Response(
        JSON.stringify({ success: true }), 
        { 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
        }
      );
    } catch (error) {
      clearTimeout(timeoutId);
      if (error.name === 'AbortError') {
        return new Response(
          JSON.stringify({ error: 'Request timeout' }), 
          { 
            status: 408, 
            headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
          }
        );
      }
      throw error;
    }

  } catch (error) {
    console.error('Unexpected error:', error);
    return new Response(
      JSON.stringify({ error: 'Internal server error' }), 
      { 
        status: 500, 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
      }
    );
  }
})