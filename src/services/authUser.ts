import axios, { AxiosError } from "axios";

export interface IAuth {
    email: string
    password: string
}

export const authUser = async(auth: IAuth): Promise<string> => {
    try {
        const baseUrl = process.env.VITE_BASE_URL_BACKEND
        const {data} = await axios.post(`${baseUrl}/auth`, auth)
        return data
    } catch (error) {
        if(error instanceof AxiosError){
            throw error
        }
        throw error
    }
}