import { z } from "zod";

export const schema = z.object({
    oldPassword: z.string({required_error: "Este campo é obrigatório"})
    .min(8, 'A senha deve ter no mínimo 8 caracteres')
    .regex(/^(?=.*\d)(?=.*[\W_]).{8,}$/, 'A senha deve conter pelo menos um número e um caractere especial')
    .nonempty('Este campo não pode estar vazio'),
    password: z.string()
    .min(8, 'A senha deve ter no mínimo 8 caracteres')
    .regex(/^(?=.*\d)(?=.*[\W_]).{8,}$/, 'A senha deve conter pelo menos um número e um caractere especial'),
    confirmPassword: z.string()
})
.refine((data) => data.password === data.confirmPassword, {
    message: 'As senhas não coincidem',
    path: ['confirmPassword'],
});

export type FormData = z.infer<typeof schema>;