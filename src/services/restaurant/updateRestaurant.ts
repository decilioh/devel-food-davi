import axios, { AxiosError } from "axios";
import { IRestaurantGet } from "./getRestaurant";

export const updateRestaurant = async (token: string, id: string, restaurant: IRestaurantGet) => {
    try {
        const baseUrl = process.env.VITE_BASE_URL_BACKEND
        const { data } = await axios.put(`${baseUrl}/restaurant/${id}`, restaurant,
            {
                headers: {
                    Authorization: "Bearer " + token,
                    'ngrok-skip-browser-warning': 'true'
                }
            }
        )
        return data
    } catch (error) {
        if (error instanceof AxiosError) {
            throw error.response?.data[0]
        }
        throw error
    }
}