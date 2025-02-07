import UserHandler from "./Users";
import { combineReducers } from "redux";

const rootReduser = combineReducers(
    {
        userinfo : UserHandler
    }
)


export default rootReduser