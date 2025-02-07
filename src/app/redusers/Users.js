import { token } from "./data"

const userInfo = {
    name : undefined ,
    role : undefined , 
    username : undefined,
    token : token
}

const UserHandler = (state = userInfo , actions) => {
    switch(actions.type) {
        case "CHANGE_NAME" : 
            return {
                ...state , 
                name : actions.payload
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