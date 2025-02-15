"use client"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useRouter } from "next/navigation";
import "../../../../app/fonts/style.css"
import InputC from "../../input-c";
import { useEffect, useState } from "react";
import ButtonC from "../../button-c";
import { useSelector , useDispatch } from "react-redux";
import chnagedata from "@/app/actions/changedata";
import { network } from "@/app/apiHandler/network";
import { LoginUser } from "@/app/apiHandler/apis";
import { toast, ToastContainer } from "react-toastify";



const LoginForm = () => {
    const router = useRouter();
    const [open , setOpen] = useState(true)
    const [load , setLoad] = useState(false)
    const select = useSelector((state) => state.regData)
    const userSelect = useSelector((state) => state.userinfo)
    const dispatch = useDispatch()

    const handelSendForm = () => {
        setLoad(true)
        let data = {
            phone : select.phone , 
            password : select.password
        }
       LoginUser(data).then(
        res => {
            console.log(res)
            localStorage.setItem("token" , res.data.token)
            localStorage.setItem("name" , res.data.name)
            dispatch({
                type:"CHANGE_NAME_USERDATA" , payload : res.data.name
            })
            dispatch({
                type:"CHANGE_TOKEN_USERDATA" , payload : res.data.token
            })
            toast.success(
                "ورود با موفقیت انجام شد"
            )
            setLoad(false)
            setTimeout(() => {
                router.push("/")
                setOpen(false)
                
            } , 5000)
            
        }
       ).catch(
        err => {
            console.log(err)
            if (err.response.data.error === "invalid user"){
                toast.warn(
                    "رمز عبور یا نام کاربری نا درست"
                )
            }
            else{
                toast.error(
                    "مشکلی پیش امده"
                )
            }
        }
       )
    }
    const handleClose = () => {
        router.back()
        
    };
    return (
        <Dialog open={open} onOpenChange={handleClose}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>
                        <h1 className="text-center">ورود</h1>
                    </DialogTitle>
                    <DialogDescription>
                        <InputC type={"text"} placeholder={"شماره تلفن یا نام کاربری"} text={"شماره تلفن"} value={select.phone} onChange={e => {dispatch(chnagedata({phone : e.target.value}))}} />
                        <InputC type={"password"} placeholder={"رمزعبور"} text={"رمز"} value={select.password} onChange={e => {dispatch(chnagedata({password : e.target.value}))}}/>
                        <div className="flex items-center space-x-2 justify-end p-[10px]">
                            <div className="grid gap-1.5 leading-none">
                                <label
                                    htmlFor="terms"
                                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-right"
                                >
                                    مرا به خاطر بسپار
                                </label>
                                <p className="text-[10px] text-muted-foreground">
                                    فعال سازی این گزینه شمارا از لاگین مجدد تا یک ماه بی نیاز میکند
                                </p>
                            </div>
                            <Checkbox id="terms" />
                        </div>
                        <ButtonC className="bg-amber-500 w-[100%] rounded-full mt-[10px]" text="ورود" load={load} onClick={handelSendForm} />
                        <p className="mt-[10px]">
                            حساب ندارید ؟ <Link href={"/register"} className="text-amber-500 cursor-pointer">
                                ساخت حساب
                            </Link>
                        </p>                    
                    </DialogDescription>
                    <ToastContainer/>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    )
}
export default LoginForm