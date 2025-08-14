import { z } from 'zod';

// Email validation schema
export const emailSchema = z.string()
  .email('Please enter a valid email address')
  .min(1, 'Email is required');

// Phone validation schema (Brazilian WhatsApp format)
export const phoneSchema = z.string()
  .min(1, 'WhatsApp number is required')
  .regex(/^[\d\s\+\(\)\-]{10,}$/, 'Please enter a valid phone number');

// Name validation schema
export const nameSchema = z.string()
  .min(2, 'Name must be at least 2 characters')
  .max(100, 'Name must be less than 100 characters')
  .regex(/^[a-zA-ZÀ-ÿ\s]+$/, 'Name can only contain letters and spaces');

// Date validation schema
export const dateSchema = z.string()
  .min(1, 'Date is required')
  .regex(/^\d{4}-\d{2}-\d{2}$/, 'Please enter a valid date (YYYY-MM-DD)');

// Time validation schema
export const timeSchema = z.string()
  .min(1, 'Time is required')
  .regex(/^\d{2}:\d{2}$/, 'Please enter a valid time (HH:MM)');

// City/State/Country validation schema
export const locationSchema = z.string()
  .min(2, 'Location must be at least 2 characters')
  .max(100, 'Location must be less than 100 characters')
  .regex(/^[a-zA-ZÀ-ÿ\s\-\.]+$/, 'Location can only contain letters, spaces, hyphens, and dots');

// Personal form data schema
export const personalFormSchema = z.object({
  fullName: nameSchema,
  email: emailSchema,
  whatsapp: phoneSchema,
  birthDate: dateSchema,
  birthTime: timeSchema,
  birthCity: locationSchema,
  birthState: locationSchema,
  birthCountry: locationSchema,
});

// Love compatibility form data schema
export const loveCompatibilityFormSchema = z.object({
  fullName: nameSchema,
  email: emailSchema,
  whatsapp: phoneSchema,
  birthDate: dateSchema,
  birthTime: timeSchema,
  birthCity: locationSchema,
  birthState: locationSchema,
  birthCountry: locationSchema,
  partnerName: nameSchema,
  partnerBirthDate: dateSchema,
  partnerBirthTime: timeSchema,
  partnerBirthCity: locationSchema,
  partnerBirthState: locationSchema,
  partnerBirthCountry: locationSchema,
});

// Sanitization function to prevent XSS
export const sanitizeInput = (input: string): string => {
  return input
    .trim()
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
    .replace(/\//g, '&#x2F;');
};

// Sanitize all form data
export const sanitizeFormData = <T extends Record<string, any>>(data: T): T => {
  const sanitized = {} as T;
  for (const [key, value] of Object.entries(data)) {
    if (typeof value === 'string') {
      sanitized[key as keyof T] = sanitizeInput(value) as T[keyof T];
    } else {
      sanitized[key as keyof T] = value;
    }
  }
  return sanitized;
};

export type PersonalFormData = z.infer<typeof personalFormSchema>;
export type LoveCompatibilityFormData = z.infer<typeof loveCompatibilityFormSchema>;