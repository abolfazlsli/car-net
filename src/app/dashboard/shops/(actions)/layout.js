'use client'
import "@/app/fonts/style.css"
import { CheckShop } from "@/app/apiHandler/apis"
import { useEffect , useState } from "react"
export default function DashboardsLayout({ addshop , shop }){
    const [hasshop , setHasShop] = useState(false)
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
            hasshop ? shop : addshop
            }
        </>
    )
}