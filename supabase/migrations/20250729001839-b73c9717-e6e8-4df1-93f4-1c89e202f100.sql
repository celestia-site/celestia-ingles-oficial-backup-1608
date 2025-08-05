-- Create table for Celestia orders
CREATE TABLE public.celestia_orders (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  full_name TEXT NOT NULL,
  email TEXT NOT NULL,
  whatsapp TEXT NOT NULL,
  birth_date DATE NOT NULL,
  birth_time TIME,
  birth_city TEXT NOT NULL,
  birth_state TEXT NOT NULL,
  birth_country TEXT NOT NULL,
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'processing', 'completed', 'cancelled')),
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.celestia_orders ENABLE ROW LEVEL SECURITY;

-- Create policies for public access (since this is a public form)
CREATE POLICY "Anyone can create celestia orders" 
ON public.celestia_orders 
FOR INSERT 
WITH CHECK (true);

-- Create policy for reading orders (you might want to restrict this later)
CREATE POLICY "Anyone can view celestia orders" 
ON public.celestia_orders 
FOR SELECT 
USING (true);

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_celestia_orders_updated_at
  BEFORE UPDATE ON public.celestia_orders
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

-- Create index for better performance
CREATE INDEX idx_celestia_orders_email ON public.celestia_orders(email);
CREATE INDEX idx_celestia_orders_created_at ON public.celestia_orders(created_at);