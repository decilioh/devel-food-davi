import { z } from "zod";
import { validCnpj } from "../../utils";

export const schemaStepOne = z.object({
    email: z.string().email("Insira um email válido"),
    cnpj: z.string().refine(validCnpj, {
        message: "CNPJ inválido",
    }),
    password: z.string()
        .min(8, 'A senha deve ter no mínimo 8 caracteres')
        .regex(/^(?=.*\d)(?=.*[\W_]).{8,}$/, 'A senha deve conter pelo menos um número e um caractere especial'),
    confirmPassword: z.string()
})
    .refine((data) => data.password === data.confirmPassword, {
        message: 'As senhas não coincidem',
        path: ['confirmPassword'],
    });

export type FormDataSchemaStepOne = z.infer<typeof schemaStepOne>;

export const schemaStepTwo = z.object({
    name: z.string().nonempty({ message: "Input - Inválido" }),
    telephone: z.string().regex(/^\(?\d{2}\)?\s?\d{4,5}\-?\d{4}$/, {
        message: "Input - Inválido"
    }),
    typesOfFood: z.union([
        z.enum(["brasileira", "picante", "mexicana", "japonesa", "arabe", "americana", "irlandesa", "italiana"]).array().nonempty({ message: "Selecione pelo menos uma opção" }),
        z.array(z.string()).min(1)
    ])
})

export type FormDataSchemaStepTwo = z.infer<typeof schemaStepTwo>;


export const schemaStepThree = z.object({
    nicknameAddress: z.string().nonempty({ message: "Campo obrigatório" }),
    cep: z.string().regex(/^\d{5}-\d{3}$/, { message: "CEP Invalido" }),
    road: z.string().nonempty({ message: "Campo obrigatório" }),
    city: z.string().nonempty({ message: "Campo obrigatório" }),
    neighborhood: z.string().nonempty({ message: "Campo obrigatório" }),
    state: z.string().nonempty({ message: "Campo obrigatório" }),
    number: z.string().regex(/^\d+$/, { message: "Apenas números são permitidos" }).nonempty({ message: "Campo obrigatório" }),})
export type FormDataSchemaStepThree = z.infer<typeof schemaStepThree>;
