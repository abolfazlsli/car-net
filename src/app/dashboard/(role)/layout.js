'use client'
import { useSelector } from "react-redux"

export default function Layout({children , shopowner , user , modal }){
    const {role} = useSelector((state) => state.userinfo)
    return (
        <>
        <main>
            {children} 
            {user}
            {/* {shopowner} */}
            {/* {modal} */}
        </main>
        </>
    )
}