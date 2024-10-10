import axios, { AxiosError } from "axios";


export const getCommentsFromRestaurant = async(token: string, id: string) => {
    try {
        const baseUrl = process.env.VITE_BASE_URL_BACKEND
        const {data} = await axios.get(`${baseUrl}/restaurant_evaluation/${id}/evaluations`,
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