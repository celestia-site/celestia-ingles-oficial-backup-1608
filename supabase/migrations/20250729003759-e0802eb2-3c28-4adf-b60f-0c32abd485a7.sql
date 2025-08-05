-- Create database trigger function to export data to Google Sheets
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
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Create trigger to automatically export data when a new order is inserted
CREATE TRIGGER trigger_export_to_google_sheets
  AFTER INSERT ON public.celestia_orders
  FOR EACH ROW
  EXECUTE FUNCTION public.export_to_google_sheets();