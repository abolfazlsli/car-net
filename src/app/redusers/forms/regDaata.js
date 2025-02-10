const singUp_form = {
    name : '',
    lastname : "",
    phone : "",
    password : ""
}


const handelSingUpForm = (state = singUp_form , action ) => {
    switch (action.type) {
        case "CHANGE_NAME":
            return {
                ...state , 
                name : action.payload
            }

        case "CHANGE_LASTNAME":
            return {
                ...state , 
                lastname : action.payload 
            }
        case "CHNAGE_DATA" :
            return {
                ...state,
                ...action.payload 
            }
        default:
            return state
    }
}

export default handelSingUpForm