"use client"
import { useSelector , useDispatch } from "react-redux"
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
import Person from "@/components/icons/Person"
import InputC from "../input-c"
import { Checkbox } from "@mui/material"
import Link from "next/link"
import { useEffect } from "react"



const Header = () => {
    const userinfo = useSelector((state) => state.userinfo)
    return (
        <>
            <div className="flex justify-between p-[20px] shadow-md bg-white w-[100%]">
                <div className="">
                    {userinfo.token ?
                     <Button className="bg-amber-500">
                        ‌‌‌‍ {userinfo.name}<Person/>
                    </Button> : 
                    <>
                    <Button className="bg-amber-500 w-[100%]">
                        <Link href={"/login"} className="w-[100%] flex"> ورود / ثبت‌‌‌‌ نام<Person/>‌‌‌‍</Link>
                    </Button>
                  </>
                       }
                    
                </div>
            </div>
        </>
    )
}

export default Header
