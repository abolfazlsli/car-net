import { network } from "./network";

export const LoginUser = (data) => 
    network.post("/users/login" , data)

export const RegisterUser = (data) => 
    network.post("/users/add" , data)

