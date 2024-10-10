import axios, { AxiosError } from "axios";
import { StatusPedido } from "../../mocks/orders";

export const putOrder = async(token: string, id: string | undefined, statusOrder: StatusPedido) => {
    try {
        const baseUrl = process.env.VITE_BASE_URL_BACKEND
        const {data} = await axios.put(`${baseUrl}/orders/${id}/status `,{
            status: statusOrder
        },
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