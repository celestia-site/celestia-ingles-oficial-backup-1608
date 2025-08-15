-- Create Google Sheets export function
CREATE OR REPLACE FUNCTION export_to_google_sheets(record_data JSONB)
RETURNS BOOLEAN AS $$
DECLARE
  result BOOLEAN := false;
BEGIN
  -- This function will be called via Edge Function
  -- For now, just log that the function was called
  RAISE NOTICE 'Export to Google Sheets requested for: %', record_data;
  
  -- Return true to indicate the function executed
  result := true;
  
  RETURN result;
EXCEPTION
  WHEN OTHERS THEN
    RAISE NOTICE 'Error in export_to_google_sheets: %', SQLERRM;
    RETURN false;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Grant execute permission
GRANT EXECUTE ON FUNCTION export_to_google_sheets(JSONB) TO anon, authenticated;