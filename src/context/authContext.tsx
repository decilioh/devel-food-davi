import Cookies from "js-cookie";
import { createContext, useContext, useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { mockUser } from "../mocks/mockUser";
import { IUserContextFunctions, UserContext } from "./userContext";
import Loader from "../components/common/Loader";
import { ThemeContext, ThemeContextProps } from "./themeContext";

export interface IAuthContextFunctions{
    token: string | undefined,
    signInSetCookies: (token: string) => void,
    signOutCookies: () => JSX.Element
    isAutenticated: () => boolean
}
export const AuthContext = createContext<IAuthContextFunctions|undefined>(undefined)

interface IAuthProvider{
    children: React.ReactNode
}

export const AuthProvider = ({ children }: IAuthProvider) => {
    const [token, setToken] = useState<string | undefined>(undefined)
    const [loading, setLoading] = useState<boolean>(true); // Estado de carregamento
    const { setEmail, setUser } = useContext(UserContext) as IUserContextFunctions
    const theme = useContext(ThemeContext)

    function isAutenticated(): boolean {
        return !!token && !!Cookies.get('userToken');
    }

    useEffect(() => {
        const userToken = Cookies.get('userToken');
        setToken(userToken);
        setLoading(false);

        if (userToken) {
            const userMock = mockUser.token === userToken;
            if (userMock) {
                return setEmail(mockUser.email);
            } 
        }
    }, [setEmail]);

    function signInSetCookies(token: string) {
        Cookies.set('userToken', token, {
            expires: 7, // Expira em 7 dias
            secure: true, // Envia apenas em HTTPS
            httpOnly: false, // Se fosse configurado no backend, seria true
        });
        setToken(token); // Atualiza o estado do token
    }

    function signOutCookies() {
        Cookies.remove('userToken');
        setUser(undefined);
        return <Navigate to="/login" replace />;
    }


    if (loading) {
        return <Loader theme={theme}/>; // ou qualquer outro componente de loading
    }

    return (
        <AuthContext.Provider value={{token, signInSetCookies, signOutCookies, isAutenticated}}>
            {children}
        </AuthContext.Provider>
    )
}