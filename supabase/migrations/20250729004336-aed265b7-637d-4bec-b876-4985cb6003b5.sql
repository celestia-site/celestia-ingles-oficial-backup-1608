-- Remove the automatic trigger since it's causing authorization issues
DROP TRIGGER IF EXISTS trigger_export_to_google_sheets ON public.celestia_orders;
DROP FUNCTION IF EXISTS public.export_to_google_sheets();