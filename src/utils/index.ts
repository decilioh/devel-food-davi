import { UseFormSetValue } from "react-hook-form";
import { useCepAutoComplete } from "../hooks/cepAutoComplete";

export function validCnpj(cnpj: string): boolean {
    // Remove caracteres não numéricos
    cnpj = cnpj.replace(/[^\d]+/g, '');

    // Verifica o comprimento do CNPJ
    if (cnpj.length !== 14) return false;

    // Divide o CNPJ em partes
    let tamanhoTotal = cnpj.length - 2;
    let cnpjSemDigitos = cnpj.substring(0, tamanhoTotal);
    let digitosVerificadores = cnpj.substring(tamanhoTotal);

    // Calcula o primeiro dígito verificador
    let soma = 0;
    let pos = tamanhoTotal - 7;
    for (let i = tamanhoTotal; i >= 1; i--) {
        soma += parseInt(cnpjSemDigitos.charAt(tamanhoTotal - i)) * pos--;
        if (pos < 2) pos = 9;
    }
    let resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
    if (resultado !== parseInt(digitosVerificadores.charAt(0))) return false;

    // Calcula o segundo dígito verificador
    tamanhoTotal++;
    cnpjSemDigitos = cnpj.substring(0, tamanhoTotal);
    soma = 0;
    pos = tamanhoTotal - 7;
    for (let i = tamanhoTotal; i >= 1; i--) {
        soma += parseInt(cnpjSemDigitos.charAt(tamanhoTotal - i)) * pos--;
        if (pos < 2) pos = 9;
    }
    resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
    if (resultado !== parseInt(digitosVerificadores.charAt(1))) return false;

    return true;
}

export const formatCNPJ = (value: string) => {
    return value
        .replace(/\D/g, '') // Remove qualquer caractere que não seja número
        .replace(/(\d{2})(\d)/, '$1.$2') // Adiciona o primeiro ponto
        .replace(/(\d{3})(\d)/, '$1.$2') // Adiciona o segundo ponto
        .replace(/(\d{3})(\d)/, '$1/$2') // Adiciona a barra
        .replace(/(\d{4})(\d)/, '$1-$2') // Adiciona o hífen
        .slice(0, 18); // Limita o tamanho em 18 caracteres (14 números + 4 separadores)
};

export const handleCNPJChange = (event: React.ChangeEvent<HTMLInputElement>, setValue: UseFormSetValue<{
    email: string;
    cnpj: string;
    password: string;
    confirmPassword: string;
}>) => {
    const formattedValue = formatCNPJ(event.target.value);
    setValue('cnpj', formattedValue, { shouldValidate: false });
};

export const extrairNumeros = (cep: string): string => {
    // Remove qualquer caractere que não seja um número
    return cep.replace(/\D/g, '');
}


export const maskPhone = (value: string) => {
    return value
        .replace(/\D/g, '') // Remove tudo o que não é dígito
        .replace(/(\d{2})(\d)/, '($1) $2') // Coloca parênteses em volta dos dois primeiros dígitos
        .replace(/(\d{4,5})(\d{4})$/, '$1-$2'); // Coloca hífen entre o quarto e quinto dígitos
};

export const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>, setValue: UseFormSetValue<{
    name: string;
    telephone: string;
    typesOfFood
    : ["brasileiro" | "picante" | "mexicana" | "japonesa", ...("brasileiro" | "picante" | "mexicana" | "japonesa")[]] | string[];
    image: File
}>) => {
    const maskedValue = maskPhone(e.target.value);
    setValue('telephone', maskedValue);
};


export const maskCEP = (value: string) => {
    // Remove tudo que não é dígito
    value = value.replace(/\D/g, '');

    // Limita o value a 8 dígitos
    if (value.length > 8) {
        value = value.slice(0, 8);
    }

    // Adiciona o hífen após o 5º dígito, se houver
    if (value.length > 5) {
        value = value.replace(/^(\d{5})(\d)/, '$1-$2');
    }
    return value
}

interface ICep {
    bairro: string;
    localidade: string;
    uf: string
    logradouro: string
}

export const handleCepChange = (e: React.ChangeEvent<HTMLInputElement>, setValue: UseFormSetValue<{
    nicknameAddress: string;
    cep: string;
    road: string;
    city: string;
    neighborhood: string;
    state: string;
    number: string;
}>) => {
    const maskedValue = maskCEP(e.target.value);
    setValue('cep', maskedValue);
    if (maskedValue.length === 9) {
        const funcao = useCepAutoComplete(maskedValue)
        funcao.then((response: ICep) => {
            setValue("city", response.localidade)
            setValue("road", response.logradouro)
            setValue("state", response.uf)
            setValue("neighborhood", response.bairro)
        }).catch(() => {
            setValue("cep", "Ocorreu um erro!")
        })
    }
};

