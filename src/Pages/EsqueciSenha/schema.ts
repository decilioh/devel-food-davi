import { z } from "zod";

export const schemaJustEmail = z.object({
    email: z.string().email('Insira um email válido')
})

export const schemaValidation = z.object({
    validationCode: z.string({required_error: "Este campo é obrigatório"}).nonempty('Este campo não pode estar vazio'),
    password: z.string()
    .min(8, 'A senha deve ter no mínimo 8 caracteres')
    .regex(/^(?=.*\d)(?=.*[\W_]).{8,}$/, 'A senha deve conter pelo menos um número e um caractere especial'),
    confirmPassword: z.string()
})
    .refine((data) => data.password === data.confirmPassword, {
        message: 'As senhas não coincidem',
        path: ['confirmPassword'],
    });

export type FormDataSchema = z.infer<typeof schemaJustEmail>;
export type FormDataSchemaValidation = z.infer<typeof schemaValidation>;