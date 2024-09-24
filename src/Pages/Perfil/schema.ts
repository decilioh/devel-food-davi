import { z } from "zod";
import { validCnpj } from "../../utils";

export const schemaAddress = z.object({
    nicknameAddress: z.string().nonempty({ message: "Campo obrigatório" }),
    cep: z.string().regex(/^\d{5}-\d{3}$/, { message: "CEP Invalido" }),
    road: z.string().nonempty({ message: "Campo obrigatório" }),
    city: z.string().nonempty({ message: "Campo obrigatório" }),
    neighborhood: z.string().nonempty({ message: "Campo obrigatório" }),
    state: z.string().nonempty({ message: "Campo obrigatório" }),
    number: z.string().regex(/^([A-Za-z]?\d{1,6}|\d{1,6}[A-Za-z]?)$/, { message: "Número deve conter no máximo 1 letra e no máximo 6 números." }).nonempty({ message: "Campo obrigatório" }),
})
export type FormDataSchemaAddress = z.infer<typeof schemaAddress>;



export const schemaPersonInfos = z.object({
    name: z.string().nonempty({ message: "Input - Inválido" }),
    telephone: z.string().regex(/^\(?\d{2}\)?\s?\d{4,5}\-?\d{4}$/, {
        message: "Input - Inválido"
    }),
    typesOfFood: z.union([
        z.enum([
            "Brasileira",
            "Mexicana",
            "Japonesa",
            "Americana",
            "Italiana",
            "Lanches",
            "Pizza",
            "Churrasco",
            "Saudavel",
            "Bebidas",
            "Acai",
            "Petiscos",
            "Chinesa",
            "Sobremesas",
        ])
        .array()
        .nonempty({ message: "Selecione pelo menos uma opção" }),
        z.array(z.string()).min(1)
    ])
})
export type FormDataSchemaPersonInfos = z.infer<typeof schemaPersonInfos>