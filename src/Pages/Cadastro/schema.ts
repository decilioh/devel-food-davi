import { z } from "zod";
import { cnpjValido } from "../../utils";

export const schemaStepOne = z.object({
    email: z.string().email("Insira um email válido"),
    cnpj: z.string().refine(cnpjValido, {
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
    nome: z.string().nonempty({ message: "É obrigatório!!" }),
    telefone: z.string().regex(/^\(?\d{2}\)?\s?\d{4,5}\-?\d{4}$/, {
        message: "Número está invalido"
    }),
    tiposDeComida: z.union([
        z.enum(["brasileiro", "picante", "mexicana", "japonesa"]).array().nonempty({ message: "Selecione pelo menos uma opção" }),
        z.array(z.string()).max(0)
    ])
})

export type FormDataSchemaStepTwo = z.infer<typeof schemaStepTwo>;


export const schemaStepThree = z.object({
    apelidoEndereco: z.string().nonempty({ message: "Campo obrigatório" }),
    cep: z.string().regex(/^\d{5}-\d{3}$/, { message: "CEP Invalido" }),
    rua: z.string().nonempty({ message: "Campo obrigatório" }),
    cidade: z.string().nonempty({ message: "Campo obrigatório" }),
    bairro: z.string().nonempty({ message: "Campo obrigatório" }),
    estado: z.string().nonempty({ message: "Campo obrigatório" }),
    numero: z.string().nonempty({ message: "Campo obrigatório" }),
})
export type FormDataSchemaStepThree = z.infer<typeof schemaStepThree>;
