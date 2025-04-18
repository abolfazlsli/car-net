"use client"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
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
import { ToastContainer , toast } from "react-toastify";
import { RegisterUser } from "@/app/apiHandler/apis";
import { DialogClose } from "@radix-ui/react-dialog";
import { setCookie } from "cookies-next/client";


const GetPhonePass = () => {
    const router = useRouter()
    const select = useSelector((state) => state.regData)
    const userSelect = useSelector((state) => state.userinfo)
    const [roles , setRoles] = useState(false)
    const [open , setOpen] = useState(true)
    const dispatch = useDispatch()
    const phoneCloseHandler = () => {
        router.back()
    }
        const sendHandler = () => {
            let send = false
            select.name.length === 0 ? toast.warn("لطفا نام خود را وارد کنید") : send = true
            select.lastname.length ===  0 ? toast.warn("لطفا نام خانوادگی خود را وارد کنید") : send = true
            select.phone.length === 0 ? toast.warn("لطفا شماره خود را وارد کنید") : send = true
            select.password.length === 0 ? toast.warn("لطفا رمزعبور خود را وارد کنید") : send = true
            if (send && roles) {
                RegisterUser(select).then(
                    res => {
                        console.log(res)
                        setCookie("token" , res.data.apidata.token , {maxAge : 2592000 })
                        setCookie("name" , res.data.apidata.name , {maxAge : 2592000})
                        dispatch({
                            type:"CHANGE_NAME_USERDATA" , payload : "test"
                        })
                        toast.success(
                            "ثبتنام موفق بود"
                        )
                        setTimeout(
                            () => {
                                setOpen(false)
                                router.push("/")
                                router.refresh()
                            } , 5000
                        )
                    }
                ).catch(
                    err => {
                        if (err.response.data.error == "repuser"){
                            toast.error(
                                "شماره تلفن تکراری است "
                            )
                        }
                        else{
                            toast.error(
                                "سیستم موقت از دسترس خارج شده"
                            )
                        }
                    }
                )
            }
            else{
                toast.warn("با قوانین موافقید ؟")
            }
        }
        return (
            <Dialog defaultOpen onOpenChange={phoneCloseHandler} open ={open}>
            <DialogContent>
            <DialogHeader>
            <DialogTitle>
                <h1 className="text-center">شماره تلفن</h1>
            </DialogTitle>
            <DialogDescription>
               <InputC type={"text"} placeholder={"شماره تلفن"} text={"شماره تلفن"} value={select.phone} onChange={e => {dispatch(chnagedata({phone : e.target.value}))}} />
               <InputC type={"password"} placeholder={"رمزعبور"} text={"رمزعبور"} value={select.password} onChange={e => {dispatch(chnagedata({password : e.target.value}))}} />
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
                    <Checkbox id="terms"  onCheckedChange={e => {setRoles(!roles)}} />
                </div>
               <div className="flex">
                    <Button className="bg-amber-500 w-[100%] rounded-full mt-[20px]" onClick={sendHandler} >
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
export default GetPhonePass