'use client'
import { useSelector } from "react-redux"

export default function Layout({children , user , modal }){
    const {role} = useSelector((state) => state.userinfo)
    return (
        <>
        <main>
            {children} 
            {user}
            {modal}
        </main>
        </>
    )
}