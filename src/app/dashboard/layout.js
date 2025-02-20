import HeaderD from "@/components/custom/Header/DashboardHeader";
import "@/app/fonts/style.css"
export default function DashboardsLayout({children , user}){
    return (
        <>
            <HeaderD/>
            {children} 
            {user}
        </>
    )
}