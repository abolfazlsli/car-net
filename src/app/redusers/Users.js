import { token , name } from "./data"
import { tokenvalidation } from "../controlers/functions"


tokenvalidation()

const userInfo = {
    name : name ,
    role : undefined , 
    username : undefined,
    token : token
}

const UserHandler = (state = userInfo , actions) => {
    switch(actions.type) {
        case "CHANGE_NAME_USERDATA" : 
            return {
                ...state , 
                name : actions.payload
            }
        case "CHANGE_TOKEN_USERDATA":
            return {
                ...state , 
                token : actions.payload
            }
        case "CHNAGE_ROLE" : 
            return {
                ...state , 
                role : actions.payload
            }
        case "CHANGE_USERNAME":
            return {
                ...state , 
                username : actions.payload
            }
        default : 
        return state
    }
}


export default UserHandler