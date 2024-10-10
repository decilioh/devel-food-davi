import axios, { AxiosError } from "axios";
import { IUser } from "../../context/signupContext";


export const signUpRestaurant = async(restaurant: IUser) => {
    try {
        const baseUrl = process.env.VITE_BASE_URL_BACKEND
        const {data} = await axios.post(`${baseUrl}/restaurant`, restaurant)
        return data
    } catch (error) {
        if(error instanceof AxiosError){
            throw error.response?.data[0]
        }
        throw error
    }
}