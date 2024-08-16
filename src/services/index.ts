//Contém funções e módulos para interagir com APIs e serviços externos

import axios from "axios"

export const FetchAdressByCEP = async(cep: string) => {
    try {
        const { data } = await axios.get(`https://viacep.com.br/ws/${cep}/json/`)
        return data
    } catch (error) {
        return error
    }
}