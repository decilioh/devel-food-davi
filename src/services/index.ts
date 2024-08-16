import axios from "axios";

export const FetchAdressByCEP = async (cep: string) => {
    try {
        const { data } = await axios.get(`https://cors-anywhere.herokuapp.com/https://viacep.com.br/ws/${cep}/json/`);
        return data;
    } catch (error) {
        return error;
    }
};
