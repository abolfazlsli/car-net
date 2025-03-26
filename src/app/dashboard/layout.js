"use client"
import HeaderD from "@/components/custom/Header/DashboardHeader";
import "@/app/fonts/style.css"
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import ShopHeader from "@/components/custom/Header/ShopHeader";
export default function DashboardsLayout({children}){
    const route = usePathname()
    const curentroute = route
    return (
        <>
        {
            curentroute === "/dashboard" ? <HeaderD page={"dashboard"}/> : curentroute === "/dashboard/shops" ? <ShopHeader/> : <></>
        }
            
            {children} 
        </>
    )
}