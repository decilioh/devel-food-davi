import axios, { AxiosError } from "axios";

export interface IChangeForgotPassword {
    email: string
    newPassword: string
    validationCode: string
}

export const changeForgotPasswordRestaurant = async (changePassword: IChangeForgotPassword) => {
    try {
        const baseUrl = process.env.VITE_BASE_URL_BACKEND
        const { data } = await axios.put(`${baseUrl}/password/change_forget_password`, changePassword)
        return data
    } catch (error) {
        if (error instanceof AxiosError) {
            throw error.response?.data[0]
        }
        throw error
    }
}