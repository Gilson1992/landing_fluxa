import { z } from 'zod';

export const planInterestSchema = z.enum(['basic', 'pro', 'enterprise']);

export const createLeadSchema = z.object({
  name: z.string().min(1, 'name is required'),
  email: z.string().email('email must be valid'),
  phone: z.string().min(1, 'phone is required'),
  company_name: z.string().min(1, 'company_name is required'),
  professionals_count: z.number().int().min(1, 'professionals_count must be >= 1'),
  plan_interest: planInterestSchema,
  message: z.string().optional()
});

export type CreateLeadInput = z.infer<typeof createLeadSchema>;
