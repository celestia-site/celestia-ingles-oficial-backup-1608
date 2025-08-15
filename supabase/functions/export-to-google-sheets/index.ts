import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

interface GoogleSheetsCredentials {
  type: string;
  project_id: string;
  private_key_id: string;
  private_key: string;
  client_email: string;
  client_id: string;
  auth_uri: string;
  token_uri: string;
  auth_provider_x509_cert_url: string;
  client_x509_cert_url: string;
}

async function getAccessToken(credentials: GoogleSheetsCredentials): Promise<string> {
  const jwt = await createJWT(credentials);
  
  const response = await fetch('https://oauth2.googleapis.com/token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer',
      assertion: jwt,
    }),
  });

  const data = await response.json();
  return data.access_token;
}

async function createJWT(credentials: GoogleSheetsCredentials): Promise<string> {
  const header = {
    alg: 'RS256',
    typ: 'JWT',
  };

  const now = Math.floor(Date.now() / 1000);
  const payload = {
    iss: credentials.client_email,
    scope: 'https://www.googleapis.com/auth/spreadsheets',
    aud: 'https://oauth2.googleapis.com/token',
    exp: now + 3600,
    iat: now,
  };

  const encodedHeader = btoa(JSON.stringify(header)).replace(/=/g, '').replace(/\+/g, '-').replace(/\//g, '_');
  const encodedPayload = btoa(JSON.stringify(payload)).replace(/=/g, '').replace(/\+/g, '-').replace(/\//g, '_');
  
  const message = `${encodedHeader}.${encodedPayload}`;
  
  // Import the private key
  const privateKey = await crypto.subtle.importKey(
    'pkcs8',
    new TextEncoder().encode(credentials.private_key.replace(/\\n/g, '\n')),
    {
      name: 'RSASSA-PKCS1-v1_5',
      hash: 'SHA-256',
    },
    false,
    ['sign']
  );

  // Sign the message
  const signature = await crypto.subtle.sign(
    'RSASSA-PKCS1-v1_5',
    privateKey,
    new TextEncoder().encode(message)
  );

  const encodedSignature = btoa(String.fromCharCode(...new Uint8Array(signature)))
    .replace(/=/g, '')
    .replace(/\+/g, '-')
    .replace(/\//g, '_');

  return `${message}.${encodedSignature}`;
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    console.log('Export to Google Sheets function called');
    
    const { record } = await req.json();
    console.log('Received record:', record);

    // Get environment variables
    const serviceAccountKey = Deno.env.get('GOOGLE_SERVICE_ACCOUNT_KEY');
    const spreadsheetId = Deno.env.get('GOOGLE_SPREADSHEET_ID') || '1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms'; // Default spreadsheet ID

    if (!serviceAccountKey) {
      throw new Error('GOOGLE_SERVICE_ACCOUNT_KEY is not configured');
    }

    // Parse the service account credentials
    const credentials: GoogleSheetsCredentials = JSON.parse(serviceAccountKey);
    
    // Get access token
    const accessToken = await getAccessToken(credentials);
    console.log('Got access token');

    // Prepare the row data
    const rowData = [
      record.full_name || '',
      record.email || '',
      record.whatsapp || '',
      record.birth_date || '',
      record.birth_time || '',
      record.birth_city || '',
      record.birth_state || '',
      record.birth_country || '',
      record.partner_name || '',
      record.partner_birth_date || '',
      record.partner_birth_time || '',
      record.partner_birth_city || '',
      record.partner_birth_state || '',
      record.partner_birth_country || '',
      record.produto || '',
      record.status || '',
      record.created_at || new Date().toISOString(),
    ];

    console.log('Prepared row data:', rowData);

    // Append data to Google Sheets
    const sheetsResponse = await fetch(
      `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/Sheet1!A:Q:append?valueInputOption=RAW`,
      {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${accessToken}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          values: [rowData],
        }),
      }
    );

    if (!sheetsResponse.ok) {
      const errorText = await sheetsResponse.text();
      console.error('Google Sheets API error:', errorText);
      throw new Error(`Google Sheets API error: ${sheetsResponse.status} - ${errorText}`);
    }

    const sheetsData = await sheetsResponse.json();
    console.log('Successfully added to Google Sheets:', sheetsData);

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: 'Data exported to Google Sheets successfully',
        sheetsResponse: sheetsData 
      }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200,
      }
    );

  } catch (error) {
    console.error('Error in export-to-google-sheets function:', error);
    return new Response(
      JSON.stringify({ 
        success: false, 
        error: error.message 
      }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 500,
      }
    );
  }
});