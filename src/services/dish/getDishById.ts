import axios, { AxiosError } from "axios";

export type RestaurantAddress = {
    id: number,
    addressLabel: string,
    postalCode: string,
    street: string,
    neighborhood: string,
    city: string,
    number:string,
    state: string
}

export type RestaurantType = {
    id: number
    email: string
    cnpj: string
    password: string
    name: string
    phoneNumber: string
    foodType: string
    photo: string
    restaurantAddress: RestaurantAddress
    entityType: string
}

export interface IDishById {
    id: number,
    dishName: string,
    description: string,
    price: number,
    foodType: string
    photo: string
    active: boolean
    restaurant: RestaurantType
}

export const getDishById = async (token: string, id: string | undefined) => {
    try {
        const baseUrl = process.env.VITE_BASE_URL_BACKEND
        const { data } = await axios.get(`${baseUrl}/dish/${id}?`,
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