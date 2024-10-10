import { z } from "zod";

export const schema = z.object({
    name: z.string().nonempty({ message: "Insira o nome do prato" }),
    description: z.string().nonempty({ message: "Insira a descrição do prato" }),
    price: z.string().min(1, "O preço deve estar no formato correto (R$ 0,00).").refine(
        (value) => {
            const numericValue = parseFloat(value.replace(/\./g, '').replace(',', '.').trim());
            return numericValue <= 1000;
        },
        { message: "O preço deve ser no máximo R$ 1.000,00." }),
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
    ]),
    image: z.union([
        z
            .any()
            .refine((file) => file instanceof File, { message: 'A imagem é obrigatória' })
            .refine((file) => file.size <= 5 * 1024 * 1024, { message: 'O tamanho da imagem deve ser menor que 5MB' })
            .refine((file) => ['image/jpeg', 'image/png'].includes(file.type), {
                message: 'Apenas arquivos PNG e JPEG são permitidos',
            }),
        z.string().url({ message: 'A URL da imagem deve ser válida.' })
    ])
})

export type FormData = z.infer<typeof schema>;