import axios from "axios"

const apiurl = process.env.NEXT_PUBLIC_API_URL
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
        data = generateFormData(data)
        data.append("apikey" , apikey) 
        return axios.post(
        `${apiurl}${url}` , data
    )
    } , 
    get : (url,data=new FormData()) =>  {
            data = generateFormData(data)
            data.append("apikey" , apikey) 
            return axios.get(
            `${apiurl}${url}` , data
        )
    }
}
