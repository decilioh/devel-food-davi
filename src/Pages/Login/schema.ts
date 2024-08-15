import { z } from "zod";

export const schema = z.object({
    email: z.string().email('Insira um email válido'),
    password: z.string()
      .min(8, 'A senha deve ter no mínimo 8 caracteres')
      .regex(/^(?=.*\d)(?=.*[\W_]).{8,}$/, 'A senha deve conter pelo menos um número e um caractere especial'),
    })

  
export type FormDataSchema = z.infer<typeof schema>;