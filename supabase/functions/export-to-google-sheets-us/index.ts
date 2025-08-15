import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

interface RequestBody {
  record: Record<string, any>;
}

serve(async (req) => {
  console.log('🚀 Export to Google Sheets US function called');
  
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    // Validate environment variables (usando os mesmos secrets da função brasileira)
    const serviceAccountEmail = Deno.env.get('GOOGLE_SERVICE_ACCOUNT_EMAIL');
    const privateKey = Deno.env.get('GOOGLE_PRIVATE_KEY');
    const spreadsheetId = Deno.env.get('GOOGLE_SPREADSHEET_ID_US');

    if (!serviceAccountEmail || !privateKey || !spreadsheetId) {
      console.error('❌ Missing environment variables');
      return new Response(
        JSON.stringify({ 
          error: 'Missing required environment variables',
          details: {
            hasServiceAccount: !!serviceAccountEmail,
            hasPrivateKey: !!privateKey,
            hasSpreadsheetId: !!spreadsheetId
          }
        }),
        { 
          status: 500, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
        }
      );
    }

    // Validate request size
    const contentLength = req.headers.get('content-length');
    if (contentLength && parseInt(contentLength) > 1000000) { // 1MB limit
      console.error('❌ Request too large');
      return new Response(
        JSON.stringify({ error: 'Request too large' }),
        { 
          status: 413, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
        }
      );
    }

    // Parse request
    const { record }: RequestBody = await req.json();
    
    if (!record) {
      console.error('❌ No record data provided');
      return new Response(
        JSON.stringify({ error: 'No record data provided' }),
        { 
          status: 400, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
        }
      );
    }

    console.log('📝 Processing record:', Object.keys(record));

    // Sanitize input data to prevent basic XSS
    const sanitizeInput = (input: string): string => {
      return input
        .replace(/[<>]/g, '')
        .replace(/javascript:/gi, '')
        .replace(/on\w+=/gi, '')
        .trim();
    };

    const sanitizedRecord = Object.fromEntries(
      Object.entries(record).map(([key, value]) => [
        key,
        typeof value === 'string' ? sanitizeInput(value) : value
      ])
    );

    console.log('🧹 Record sanitized');

    // Create JWT for Google API authentication
    const now = Math.floor(Date.now() / 1000);
    const jwtHeader = {
      alg: "RS256",
      typ: "JWT"
    };

    const jwtClaimSet = {
      iss: serviceAccountEmail,
      scope: "https://www.googleapis.com/auth/spreadsheets",
      aud: "https://oauth2.googleapis.com/token",
      exp: now + 3600,
      iat: now
    };

    const encoder = new TextEncoder();
    const jwtHeaderBase64 = btoa(JSON.stringify(jwtHeader))
      .replace(/\+/g, '-')
      .replace(/\//g, '_')
      .replace(/=/g, '');
    
    const jwtClaimSetBase64 = btoa(JSON.stringify(jwtClaimSet))
      .replace(/\+/g, '-')
      .replace(/\//g, '_')
      .replace(/=/g, '');

    const unsignedJWT = `${jwtHeaderBase64}.${jwtClaimSetBase64}`;

    // Import private key and sign JWT
    const pemHeader = "-----BEGIN PRIVATE KEY-----";
    const pemFooter = "-----END PRIVATE KEY-----";
    // Handle both escaped newlines (\n) and actual newlines
    const cleanedKey = privateKey.replace(/\\n/g, '\n');
    const pemContents = cleanedKey.replace(pemHeader, "").replace(pemFooter, "").replace(/\s/g, "");
    
    const binaryDer = Uint8Array.from(atob(pemContents), c => c.charCodeAt(0));
    
    const cryptoKey = await crypto.subtle.importKey(
      "pkcs8",
      binaryDer,
      {
        name: "RSASSA-PKCS1-v1_5",
        hash: "SHA-256",
      },
      false,
      ["sign"]
    );

    const signature = await crypto.subtle.sign(
      "RSASSA-PKCS1-v1_5",
      cryptoKey,
      encoder.encode(unsignedJWT)
    );

    const signatureBase64 = btoa(String.fromCharCode(...new Uint8Array(signature)))
      .replace(/\+/g, '-')
      .replace(/\//g, '_')
      .replace(/=/g, '');

    const signedJWT = `${unsignedJWT}.${signatureBase64}`;

    console.log('🔐 JWT created and signed');

    // Get access token
    const tokenResponse = await fetch('https://oauth2.googleapis.com/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `grant_type=urn:ietf:params:oauth:grant-type:jwt-bearer&assertion=${signedJWT}`,
    });

    if (!tokenResponse.ok) {
      const errorText = await tokenResponse.text();
      console.error('❌ Token request failed:', errorText);
      throw new Error(`Token request failed: ${tokenResponse.status}`);
    }

    const tokenData = await tokenResponse.json();
    const accessToken = tokenData.access_token;

    console.log('🎟️ Access token obtained');

    // Prepare data for Google Sheets
    const rowData = [
      sanitizedRecord.full_name || '',
      sanitizedRecord.email || '',
      sanitizedRecord.whatsapp || '',
      sanitizedRecord.birth_date || '',
      sanitizedRecord.birth_time || '',
      sanitizedRecord.birth_city || '',
      sanitizedRecord.birth_state || '',
      sanitizedRecord.birth_country || '',
      sanitizedRecord.partner_name || '',
      sanitizedRecord.partner_birth_date || '',
      sanitizedRecord.partner_birth_time || '',
      sanitizedRecord.partner_birth_city || '',
      sanitizedRecord.partner_birth_state || '',
      sanitizedRecord.partner_birth_country || '',
      sanitizedRecord.produto || '',
      sanitizedRecord.status || 'pending',
      new Date(sanitizedRecord.created_at || Date.now()).toISOString()
    ];

    console.log('📊 Row data prepared:', rowData.length, 'columns');

    // Append to Google Sheets with timeout
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 10000); // 10 second timeout

    try {
      const appendResponse = await fetch(
        `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/Sheet1:append?valueInputOption=RAW`,
        {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${accessToken}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            values: [rowData]
          }),
          signal: controller.signal
        }
      );

      clearTimeout(timeoutId);

      if (!appendResponse.ok) {
        const errorText = await appendResponse.text();
        console.error('❌ Google Sheets API error:', errorText);
        throw new Error(`Google Sheets API error: ${appendResponse.status} - ${errorText}`);
      }

      const result = await appendResponse.json();
      console.log('✅ Successfully exported to Google Sheets US:', result);

      return new Response(
        JSON.stringify({ 
          success: true, 
          message: 'Data exported to Google Sheets US successfully',
          updatedRows: result.updates?.updatedRows || 0
        }),
        { 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
        }
      );

    } catch (error) {
      clearTimeout(timeoutId);
      if (error.name === 'AbortError') {
        console.error('❌ Request timeout');
        throw new Error('Request timeout - Google Sheets API took too long to respond');
      }
      throw error;
    }

  } catch (error) {
    console.error('❌ Export to Google Sheets US failed:', error);
    return new Response(
      JSON.stringify({ 
        error: 'Failed to export to Google Sheets US',
        details: error.message 
      }),
      { 
        status: 500, 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
      }
    );
  }
});