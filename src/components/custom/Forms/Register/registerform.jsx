"use client"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import "../../../../app/fonts/style.css"

import InputC from "../../input-c";
import { DialogClose } from "@radix-ui/react-dialog";
import { useState } from "react";
import { useRouter } from "next/navigation";



const RegisterForm = () => {
    const [open , setOpen] = useState(true)
    const [getphonepage , setGetphone] = useState(false)
    const router = useRouter()
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
    const GetPhonePass = () => {
        return (
            <Dialog open={getphonepage} onOpenChange={phoneCloseHandler} >
            <DialogContent>
            <DialogHeader>
            <DialogTitle>
               
                <h1 className="text-center">شماره تلفن</h1>
            </DialogTitle>
            <DialogDescription>
               <InputC type={"text"} placeholder={"شماره تلفن"} text={"شماره تلفن"}/>
               <InputC type={"password"} placeholder={"رمزعبور"} text={"رمزعبور"}/>
               <div className="flex items-center space-x-2 justify-end p-[10px]">
                    <div className="grid gap-1.5 leading-none">
                        <label
                            htmlFor="terms"
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-right"
                        >
                            با قوانین و شرایت کارنت موافق هستم
                        </label>
                        <p className="text-[10px] text-muted-foreground">
                            میتوانید قوانین و شرایط را از <Link className="text-amber-500" href={"/"}>اینجا </Link> مشاهده کنید
                        </p>
                    </div>
                    <Checkbox id="terms" />
                </div>
               <div className="flex">
                    <Button className="bg-amber-500 w-[100%] rounded-full mt-[20px]">
                        ثبت نام
                    </Button>
                    <Button className="bg-amber-300 w-[100%] rounded-full mt-[20px] ml-[5px]" onClick={phoneCloseHandler}>
                        قدم قبلی
                    </Button>
                </div>
                <p className="mt-[10px]">
                    حساب دارید ؟ <Link href={"/login"} className="text-amber-500 cursor-pointer">
                        ورود به حساب
                    </Link>
                </p>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
        )   
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
            <InputC type={"text"} placeholder={"نام"} text={"نام"}/>
            <InputC type={"text"} placeholder={"نام خانوادگی"} text={"نام خانوادگی"}/>
                <Button className="bg-amber-500 w-[100%] rounded-full mt-[20px]" onClick={getphoneHandler}>
                    قدم بعد
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
    <GetPhonePass/>
    </>
    )
}
export default RegisterForm