import axios, { AxiosError } from "axios";
import { RestaurantType } from "../dish/getDishById";

export interface IPromotionById {
    idPromotion: number,
    discountPercentage: string,
    name: string,
    endDate: string,
    startDate: string
    imageUrl: string
    restaurant: RestaurantType
}


export const getAllPromotionsFromId = async(token: string, id: string) => {
    try {
        const baseUrl = process.env.VITE_BASE_URL_BACKEND
        const {data} = await axios.get(`${baseUrl}/promotions/restaurant/${id}`,
            {
                headers: {
                   Authorization: "Bearer " + token,
                   'ngrok-skip-browser-warning': 'true'
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