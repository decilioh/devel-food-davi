import axios, { AxiosError } from "axios";


export const deletePromotion = async(token: string, id: string| undefined,) => {
    try {
        const baseUrl = process.env.VITE_BASE_URL_BACKEND
        const {data} = await axios.delete(`${baseUrl}/promotions/${id}`,
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