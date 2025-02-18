'use client'
import { useSelector } from "react-redux"

export default function Layout({children , user}){
    const {role} = useSelector((state) => state.userinfo)
    return (
        <>
            {children} 
            {user}
            <p>
                {role}
            </p>
        </>
    )
}