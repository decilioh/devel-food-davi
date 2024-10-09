import axios, { AxiosError } from "axios";

export interface IDish {
    dishName: string,
    description: string,
    price: string,
    foodType: string,
    photo: string | null,
    restaurant: {
        id: number
    }
}

export const createDish = async(dish: IDish, token: string) => {
    try {
        const baseUrl = process.env.VITE_BASE_URL_BACKEND
        const {data} = await axios.post(`${baseUrl}/dish`, dish,
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