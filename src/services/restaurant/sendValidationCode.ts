import axios, { AxiosError } from "axios";
import { IUser } from "../../context/signupContext";


export const sendValidationCodeRestaurant = async(email: string) => {
    try {
        const baseUrl = process.env.VITE_BASE_URL_BACKEND
        const {data} = await axios.post(`${baseUrl}/password/send_code`, {
            email: email
        })
        return data
    } catch (error) {
        if(error instanceof AxiosError){
            throw error.response?.data[0]
        }
        throw error
    }
}