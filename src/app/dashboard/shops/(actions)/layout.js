'use client'
import "@/app/fonts/style.css"
import { CheckShop } from "@/app/apiHandler/apis"
import { useEffect , useState } from "react"
import { ToastContainer } from "react-toastify"
export default function DashboardsLayout({ addshop , shop }){
    const [hasshop , setHasShop] = useState(null)
    const checkShop = async () => {
        await CheckShop({token : localStorage.getItem("token")}).then(
            res => {
                setHasShop(true)
            }
        ).catch(
            err => {
                setHasShop(false)
            }
        )
    }
    useEffect(() => {  
        checkShop()
    } , [])
    return (
        <>
            {
            hasshop === null ? <><h1>loading...</h1></> : hasshop ? shop : addshop
            }
            <ToastContainer/>
        </>
    )
}