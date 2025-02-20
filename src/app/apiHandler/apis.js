import { network } from "./network";

export const LoginUser = (data) => 
    network.post("/users/login" , data)

export const RegisterUser = (data) => 
    network.post("/users/add" , data)

export const CheckToken = (data) =>
    network.post("/tokens/check" , data)

export const GetMe = (data) => 
    network.post("/users/me" , data)

export const CheckUsernName = (data) =>
    network.post("/check/user/" , data)