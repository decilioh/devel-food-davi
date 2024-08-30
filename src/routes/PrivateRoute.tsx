import { ReactNode, useContext } from "react"
import { AuthContext, IAuthContextFunctions } from "../context/authContext"
import { Navigate, useNavigate } from "react-router-dom"

interface IPrivateRoute {
    children: ReactNode
}

const PrivateRoute = ({ children }: IPrivateRoute) => {
    const {isAutenticated} = useContext(AuthContext) as IAuthContextFunctions
    
    if (!isAutenticated()) {
        return <Navigate to="/login" replace />;
    }

    return <>{children}</>;

}

export default PrivateRoute