-- Add partner fields to celestia_orders table
ALTER TABLE public.celestia_orders 
ADD COLUMN partner_name TEXT,
ADD COLUMN partner_birth_date DATE,
ADD COLUMN partner_birth_time TIME,
ADD COLUMN partner_birth_city TEXT,
ADD COLUMN partner_birth_state TEXT,
ADD COLUMN partner_birth_country TEXT,
ADD COLUMN produto TEXT NOT NULL DEFAULT '';