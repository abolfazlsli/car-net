import { token } from "../redusers/data";
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
    network.post("/users/check/username" , data)

export const EditUserInfo = (data) => 
    network.post("/users/edituser" , data)

export const GetActivty = (data) => 
    network.post("/users/send/activiy" , data)

export const GetCarsBrands = () => 
    network.get("/cars/brands")


export const GetShops = () => 
    network.get("/shops/get")

export const CheckShop = (data) => 
    network.post("/shops/checkshop" , data) 

export const AddShop = (data) => 
    network.post("/shops/add" , data)


export const sendFile = (data) => 
    network.postfile("/files/write/shop" , data)

// export const UpdateShop = (data) => 
//     network.put("/shops/update" , data)
