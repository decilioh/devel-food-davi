import axios, { AxiosError } from "axios";
import { IPromotion } from "./createPromotion";


export const updatePromotion = async(promotion: IPromotion, token: string, idPromotion: string) => {
    try {
        const baseUrl = process.env.VITE_BASE_URL_BACKEND
        const {data} = await axios.put(`${baseUrl}/promotions/${idPromotion}`, promotion,
            {
                headers: {
                   Authorization: "Bearer " + token
                }
            }
        )
        return data
    } catch (error) {
        if(error instanceof AxiosError){
            throw error.response?.data[0]
        }
        throw error
    }
}