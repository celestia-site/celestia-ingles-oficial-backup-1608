-- Fix security warning by setting search_path for the function
CREATE OR REPLACE FUNCTION public.export_to_google_sheets()
RETURNS TRIGGER AS $$
DECLARE
  function_response jsonb;
BEGIN
  -- Call the edge function to export the record to Google Sheets
  SELECT
    net.http_post(
      url := 'https://gxlhclhlvtcoypzvtvsh.supabase.co/functions/v1/export-to-google-sheets',
      headers := jsonb_build_object(
        'Content-Type', 'application/json',
        'Authorization', 'Bearer ' || current_setting('request.jwt.claims', true)::jsonb->>'anon_key'
      ),
      body := jsonb_build_object('record', to_jsonb(NEW))
    ) INTO function_response;
  
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER SET search_path = '';