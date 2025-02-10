"use client"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import "../../../../app/fonts/style.css"

import InputC from "../../input-c";
import { useState } from "react";
import { useRouter } from "next/navigation";
import chnagedata from "@/app/actions/changedata";
import { useSelector , useDispatch } from "react-redux";


const RegisterForm = () => {
    const [open , setOpen] = useState(true)
    const [getphonepage , setGetphone] = useState(false)
    const router = useRouter()
    const select = useSelector((state) => state.regData)
    const dispatch = useDispatch()
    const handleClose = () => {
        router.back()
    }
    const getphoneHandler = () => {
        setGetphone(true)
        setOpen(false)
    }
    const phoneCloseHandler = () => {
        setGetphone(false)
        setOpen(true)
    }
   
    return (
        <>
        <Dialog open={open} onOpenChange={handleClose}>
        <DialogContent>
        <DialogHeader>
            <DialogTitle>
            
                <h1 className="text-center">ثبت نام</h1>
            </DialogTitle>
            <DialogDescription>
            <InputC type={"text"} placeholder={"نام"} text={"نام"} value={select.name} onChange={e => {dispatch(chnagedata({name : e.target.value}))}} />
            <InputC type={"text"} placeholder={"نام خانوادگی"} text={"نام خانوادگی"} value={select.lastname} onChange={e => {dispatch(chnagedata({lastname : e.target.value}))}} />
                <Button className="bg-amber-500 w-[100%] rounded-full mt-[20px]" onClick={getphoneHandler}>
                    <Link href={"/getphonepass"}> قدم بعد </Link>
                </Button>
                <p className="mt-[10px]">
                    حساب دارید ؟ <Link href={"/login"} className="text-amber-500 cursor-pointer">
                        ورود به حساب
                    </Link>
                </p>
            </DialogDescription>
        </DialogHeader>
        </DialogContent>
    </Dialog>
    </>
    )
}
export default RegisterForm