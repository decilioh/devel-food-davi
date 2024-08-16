import { FetchAdressByCEP } from "../services";

export const useCepAutoComplete = async (cep: string) => {
    cep = cep.replace('-', '')
    let addressData

    try {
        addressData = await FetchAdressByCEP(cep);
    } catch (error) {
        return error
    }


    return addressData
}