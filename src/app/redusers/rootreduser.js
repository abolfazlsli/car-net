import UserHandler from "./Users";
import  handelSingUpForm from "./forms/regDaata";
import { combineReducers } from "redux";

const rootReduser = combineReducers(
    {
        userinfo : UserHandler ,
        regData : handelSingUpForm
    }
)


export default rootReduser