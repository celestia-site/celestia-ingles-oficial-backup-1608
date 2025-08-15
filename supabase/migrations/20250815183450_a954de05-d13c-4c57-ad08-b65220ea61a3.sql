-- Create a new table for US Celestia orders
CREATE TABLE public.celestia_orders_us (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  full_name TEXT NOT NULL,
  email TEXT NOT NULL,
  whatsapp TEXT NOT NULL,
  birth_date DATE NOT NULL,
  birth_time TIME WITHOUT TIME ZONE,
  birth_city TEXT NOT NULL,
  birth_state TEXT NOT NULL,
  birth_country TEXT NOT NULL,
  partner_name TEXT,
  partner_birth_date DATE,
  partner_birth_time TIME WITHOUT TIME ZONE,
  partner_birth_city TEXT,
  partner_birth_state TEXT,
  partner_birth_country TEXT,
  produto TEXT NOT NULL DEFAULT '',
  status TEXT DEFAULT 'pending',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.celestia_orders_us ENABLE ROW LEVEL SECURITY;

-- Create RLS policies for secure operations
CREATE POLICY "secure_insert_only_us" 
ON public.celestia_orders_us 
FOR INSERT 
WITH CHECK (true);

CREATE POLICY "block_all_reads_us" 
ON public.celestia_orders_us 
FOR SELECT 
USING (false);

CREATE POLICY "block_all_updates_us" 
ON public.celestia_orders_us 
FOR UPDATE 
USING (false);

CREATE POLICY "block_all_deletes_us" 
ON public.celestia_orders_us 
FOR DELETE 
USING (false);

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_celestia_orders_us_updated_at
BEFORE UPDATE ON public.celestia_orders_us
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();