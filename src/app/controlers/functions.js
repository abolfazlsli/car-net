import { CheckToken } from "../apiHandler/apis"
import { token } from "../redusers/data"
export const tokenvalidation = () => {
    CheckToken({"token" : token}).catch(
        err => {
            localStorage.removeItem("token")
            localStorage.removeItem("name")
        }
    )
}