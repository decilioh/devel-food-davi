import { z } from "zod";

export const schema = z.object({
    name: z.string().nonempty({ message: "Input - Inválido" }),
    description: z.string().nonempty({ message: "Input - Inválido" }),
    price: z.string().min(1, 'Insira o preço').regex(/^\d+(\.\d{1,2})?$/, { message:  'Preço inválido. Apenas números e até duas casas decimais são permitidos.' })
    .nonempty({ message: "Input - Inválido" }),
    typesOfFood: z.union([
        z.enum(["brasileira", "picante", "mexicana", "japonesa", "arabe", "americana", "irlandesa", "italiana"]).array().nonempty({ message: "Selecione pelo menos uma opção" }),
        z.array(z.string()).max(0)
    ]),
    image: z.instanceof(FileList)
    .refine((files) => files.length > 0, 'Imagem é obrigatória')
    .refine((files) => files[0]?.type?.startsWith('image/'), 'Arquivo precisa ser uma imagem'),
})

export type FormData = z.infer<typeof schema>;