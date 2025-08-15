import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders })
  }

  try {
    console.log('Received request to export data to Google Sheets')
    const { record } = await req.json()
    console.log('Record received:', JSON.stringify(record, null, 2))
    
    const serviceAccountKey = Deno.env.get('GOOGLE_SERVICE_ACCOUNT_KEY')
    if (!serviceAccountKey) {
      console.error('Google Service Account key not found in environment')
      throw new Error('Google Service Account key not configured')
    }
    
    let serviceAccount
    try {
      serviceAccount = JSON.parse(serviceAccountKey)
    } catch (e) {
      console.error('Failed to parse service account key:', e)
      throw new Error('Invalid service account key format')
    }

    // Spreadsheet ID from the provided Google Sheets URL
    const spreadsheetId = '1V4Lg_i5JPWMLM5rCO_0X4MwXZ0Nx9-qLlDKQeTws_Wo'
    console.log('Using spreadsheet ID:', spreadsheetId)
    
    // Generate JWT for Google API authentication
    const now = Math.floor(Date.now() / 1000)
    const header = {
      alg: 'RS256',
      typ: 'JWT'
    }
    
    const payload = {
      iss: serviceAccount.client_email,
      scope: 'https://www.googleapis.com/auth/spreadsheets',
      aud: 'https://oauth2.googleapis.com/token',
      exp: now + 3600,
      iat: now
    }
    
    // Create JWT token
    const headerB64 = btoa(JSON.stringify(header)).replace(/=/g, '').replace(/\+/g, '-').replace(/\//g, '_')
    const payloadB64 = btoa(JSON.stringify(payload)).replace(/=/g, '').replace(/\+/g, '-').replace(/\//g, '_')
    
    const signatureInput = headerB64 + '.' + payloadB64
    
    // Import private key
    console.log('Processing private key...')
    let privateKeyPem = serviceAccount.private_key
    
    // Clean up the private key format
    if (typeof privateKeyPem === 'string') {
      // Replace escaped newlines with actual newlines
      privateKeyPem = privateKeyPem.replace(/\\n/g, '\n')
      
      // Ensure proper format
      if (!privateKeyPem.includes('-----BEGIN PRIVATE KEY-----')) {
        throw new Error('Invalid private key format - missing header')
      }
      if (!privateKeyPem.includes('-----END PRIVATE KEY-----')) {
        throw new Error('Invalid private key format - missing footer')
      }
    }
    
    // Extract the base64 content between the headers
    const privateKeyContent = privateKeyPem
      .replace('-----BEGIN PRIVATE KEY-----', '')
      .replace('-----END PRIVATE KEY-----', '')
      .replace(/\s/g, '')
    
    console.log('Private key content length:', privateKeyContent.length)
    
    let privateKeyBytes
    try {
      privateKeyBytes = Uint8Array.from(atob(privateKeyContent), c => c.charCodeAt(0))
    } catch (e) {
      console.error('Failed to decode private key base64:', e)
      throw new Error('Invalid private key base64 encoding')
    }
    
    const privateKey = await crypto.subtle.importKey(
      'pkcs8',
      privateKeyBytes,
      {
        name: 'RSASSA-PKCS1-v1_5',
        hash: { name: 'SHA-256' }
      },
      false,
      ['sign']
    )
    
    // Sign the JWT
    const signature = await crypto.subtle.sign(
      'RSASSA-PKCS1-v1_5',
      privateKey,
      new TextEncoder().encode(signatureInput)
    )
    
    const signatureB64 = btoa(String.fromCharCode(...new Uint8Array(signature)))
      .replace(/=/g, '').replace(/\+/g, '-').replace(/\//g, '_')
    
    const jwt = signatureInput + '.' + signatureB64
    
    // Get access token
    const tokenResponse = await fetch('https://oauth2.googleapis.com/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: `grant_type=urn:ietf:params:oauth:grant-type:jwt-bearer&assertion=${jwt}`
    })
    
    if (!tokenResponse.ok) {
      const tokenError = await tokenResponse.text()
      console.error('Token error:', tokenError)
      throw new Error('Failed to get access token')
    }
    
    const tokenData = await tokenResponse.json()
    const accessToken = tokenData.access_token
    
    // Prepare the data row - produto sempre na coluna A
    const values = [[
      record.produto || 'Produto não especificado', // Coluna A
      record.full_name,                              // Coluna B
      record.email,                                  // Coluna C
      record.whatsapp,                              // Coluna D
      record.birth_date,                            // Coluna E
      record.birth_time || '',                      // Coluna F
      record.birth_city,                            // Coluna G
      record.birth_state,                           // Coluna H
      record.birth_country,                         // Coluna I
      record.status,                                // Coluna J
      new Date(record.created_at).toLocaleString('pt-BR'), // Coluna K
      record.partner_name || '',                    // Coluna L
      record.partner_birth_date || '',              // Coluna M
      record.partner_birth_time || '',              // Coluna N
      record.partner_birth_city || '',              // Coluna O
      record.partner_birth_state || '',             // Coluna P
      record.partner_birth_country || ''            // Coluna Q
    ]]
    console.log('Prepared values for Google Sheets:', JSON.stringify(values, null, 2))

    const googleSheetsUrl = `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/Sheet1:append?valueInputOption=RAW`
    console.log('Making request to Google Sheets API...')
    
    // Append data to Google Sheets
    const response = await fetch(googleSheetsUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${accessToken}`
        },
        body: JSON.stringify({
          values: values
        })
      }
    )

    if (!response.ok) {
      const errorText = await response.text()
      console.error('Google Sheets API error:', errorText)
      throw new Error(`Google Sheets API error: ${response.status}`)
    }

    const result = await response.json()
    console.log('Successfully exported to Google Sheets:', result)

    return new Response(
      JSON.stringify({ success: true, result }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200 
      }
    )

  } catch (error) {
    console.error('Error exporting to Google Sheets:', error)
    return new Response(
      JSON.stringify({ error: error.message }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 500 
      }
    )
  }
})