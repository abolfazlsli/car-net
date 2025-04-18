import axios from "axios"
import { getCookie } from "cookies-next"

export const apiurl = process.env.NEXT_PUBLIC_API_URL
const apikey = process.env.NEXT_PUBLIC_API_KEY


const generateFormData = (objectdata) => {
    let formData = new FormData()
    for (const key in objectdata) {
            formData.append(key, objectdata[key]);
        }
    return formData
}


export const network = {
    post : (url,data) =>  {
        // data.append("apikey" , apikey) 
        data.apikey = apikey
        return axios.post(
        `${apiurl}${url}` , data  , {
            headers : {
                Authorization : `Bearer ${getCookie("token")}`
            }
        }
    )
    } , 
    get : (url,data=new FormData()) =>  {
            // data.append("apikey" , apikey) 
            data.apikey = apikey
            return axios.get(
            `${apiurl}${url}` , data ,
            {
                headers : {
                    Authorization : `Bearer ${getCookie("token")}`
                }
            }
        )
    } ,
    put : (url,data) => {
        // data.append("apikey" , apikey) 
        data.apikey = apikey
        return axios.put(
            `${apiurl}${url}` , data ,
            {
                headers : {
                    Authorization : `Bearer ${getCookie("token")}`
                }
            }
        )
    } , 
    delete : (url , data) => {
        // data.append("apikey" , apikey) 
        console.log(data)
        data.apikey = apikey
        return axios.delete(
            `${apiurl}${url}` , data ,
            {
                headers : {
                    Authorization : `Bearer ${getCookie("token")}`
                }
            }
        )
    } ,
    postfile : (url , data) => { 
        data = generateFormData(data)
        return axios.post(
            `${apiurl}${url}` , data , {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Accept': 'application/json',
                    Authorization : `Bearer ${getCookie("token")}`
                  }
            }
        )
    }
}
