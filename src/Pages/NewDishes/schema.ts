import { z } from "zod";

export const schema = z.object({
    name: z.string().nonempty({ message: "Insira o nome do prato" }),
    description: z.string().nonempty({ message: "Insira a descrição do prato" }),
    price: z.string().min(1, 'Insira o preço').regex(/^\d+(\.\d{1,2})?$/, { message: 'Preço inválido. Apenas números e até duas casas decimais são permitidos.' })
        .nonempty({ message: "Input - Inválido" }),
    typesOfFood: z.union([
        z.enum(["brasileira", "picante", "mexicana", "japonesa", "arabe", "americana", "irlandesa", "italiana"]).array().nonempty({ message: "Selecione pelo 1 tipo de comida" }),
        z.array(z.string()).max(0)
    ]),
    image: z
        .any()
        .refine((file) => file instanceof File, { message: 'A imagem é obrigatória' })
        .refine((file) => file.size <= 5 * 1024 * 1024, { message: 'O tamanho da imagem deve ser menor que 5MB' })
        .refine((file) => ['image/jpeg', 'image/png'].includes(file.type), {
            message: 'Apenas arquivos PNG e JPEG são permitidos',
        })
})

export type FormData = z.infer<typeof schema>;