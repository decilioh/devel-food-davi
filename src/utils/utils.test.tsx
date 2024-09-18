import { formatCNPJ, maskCEP, maskPhone, validCnpj } from "."

describe("Testes nas funções de utilidades: ", () => {
    test("Validação de CNPJ", () => {
        expect(validCnpj("24651404000103")).toBe(true)
        expect(validCnpj("24651404002403")).toBe(false)
    })

    test("Formatação de CNPJ", () => {
        expect(formatCNPJ("24651404000103")).toBe("24.651.404/0001-03")
    })

    test("Formatação de número de telefone", () => {
        expect(maskPhone("24999117590")).toBe("(24) 99911-7590")
    })

    test("Formatação de CEP", () => {
        expect(maskCEP("27522000")).toBe("27522-000")
    })
})