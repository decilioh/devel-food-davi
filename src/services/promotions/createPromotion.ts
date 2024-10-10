import axios, { AxiosError } from "axios";


export interface IPromotion {
    name: string,
    discountPercentage: string,
    imageUrl: string | null,
    startDate: string,
    endDate: string,
}

export const createPromotion = async(promotion: IPromotion, token: string, id: string) => {
    try {
        const baseUrl = process.env.VITE_BASE_URL_BACKEND
        const {data} = await axios.post(`${baseUrl}/promotions/restaurant/${id}`, promotion,
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