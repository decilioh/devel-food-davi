import axios, { AxiosError } from "axios";

export interface IChangePassword {
    email: string
    oldPassword: string
    newPassword: string
    confirmNewPassword: string
}

export const changePasswordRestaurant = async (token: string, changePassword: IChangePassword) => {
    try {
        const baseUrl = process.env.VITE_BASE_URL_BACKEND
        const { data } = await axios.put(`${baseUrl}/password/change_password`, changePassword,
            {
                headers: {
                    Authorization: "Bearer " + token,
                    
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