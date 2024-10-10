import axios, { AxiosError } from "axios";

type RestaurantAddress = {
    addressLabel: string,
    postalCode: string,
    street: string,
    neighborhood: string,
    city: string,
    number:string,
    state: string
}

export interface IRestaurantGet {
    email: string
    cnpj: string
    password: string
    name: string
    phoneNumber: string
    foodType: string
    photo: string | null
    restaurantAddress: RestaurantAddress
}

export const getRestaurantById = async (token: string, id: string) => {
    try {
        const baseUrl = process.env.VITE_BASE_URL_BACKEND
        const { data } = await axios.get(`${baseUrl}/restaurant/${id}?`,
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