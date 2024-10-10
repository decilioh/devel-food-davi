import axios, { AxiosError } from "axios";
import { IDish } from "./createDish";


export const updateDish = async(dish: IDish, token: string, idDish: string) => {
    try {
        const baseUrl = process.env.VITE_BASE_URL_BACKEND
        const {data} = await axios.put(`${baseUrl}/dish/${idDish}`, dish,
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