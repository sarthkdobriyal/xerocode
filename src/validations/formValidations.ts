import { z } from 'zod';

export const FormValidator = z.object({
    name: z.string().min(3).max(20),
    email: z.string().email(),
    phone: z.string().min(10).max(10),
    city: z.string(),
}).required()

export type FormData = z.infer<typeof FormValidator>; 