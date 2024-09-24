import axios from "axios";

export const FetchAdressByCEP = async (cep: string) => {
    try {
        const baseUrl = process.env.VITE_BASE_URL_CEP

        const { data } = await axios.get(`${baseUrl}/${cep}/json/`);
        return data;
    } catch (error) {
        return error;
    }
};
