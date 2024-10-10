import { z } from "zod";

export const schema = z.object({
    name: z.string().nonempty({ message: "Insira o nome da promoção" }),
    discount: z.string()
        .regex(/^(100|[1-9][0-9]?)$/, { message: 'A porcentagem deve ser um numero inteiro entre 1 e 100' }),
    image: z.union([
        z
            .any()
            .refine((file) => file instanceof File, { message: 'A imagem é obrigatória' })
            .refine((file) => file.size <= 5 * 1024 * 1024, { message: 'O tamanho da imagem deve ser menor que 5MB' })
            .refine((file) => ['image/jpeg', 'image/png'].includes(file.type), {
                message: 'Apenas arquivos PNG e JPEG são permitidos',
            }),
        z.string().url({ message: 'A URL da imagem deve ser válida.' })
    ]),
    startDate: z.string()
        .nonempty({ message: "Data de início é obrigatória" })
        .refine((date) => !isNaN(Date.parse(date)), { message: "Data de início inválida" }),
    endDate: z.string()
        .nonempty({ message: "Data de término é obrigatória" })
        .refine((date) => !isNaN(Date.parse(date)), { message: "Data de término inválida" }),
}).superRefine((data, ctx) => {
    const startDate = new Date(data.startDate);
    const endDate = new Date(data.endDate);

    if (endDate <= startDate) {
        ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: "A data de término deve ser posterior à data de início",
            path: ["endDate"],
        });
    }
})

export type FormData = z.infer<typeof schema>;