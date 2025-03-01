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
import { Popover 
    , PopoverTrigger
     , PopoverContent } from "@/components/ui/popover"
import Link from "next/link"
import { useEffect, useState } from "react"
import { Label } from "@/components/ui/label"
import DashboardIcon from "@/components/icons/Dashboard"
import ShopIcon from "@/components/icons/Shop"
import { PowerIcon } from "lucide-react"
import X from "@/components/icons/x"
import { toast, ToastContainer } from "react-toastify"




const Header = () => {
    const userinfo = useSelector((state) => state.userinfo)
    const [logout , setLogout] = useState(false)
    const dispatch = useDispatch()
    return (
        <>
            <div className="flex justify-between p-[15px] shadow-md bg-white w-[100%]">
                <div className="">
                    {userinfo.token ?
                    <>
                      
                        <Popover>
                            <PopoverTrigger>
                                <Button className="bg-amber-500">
                                    ‌‌‌‍ {userinfo.name}<Person/>
                                </Button> 
                            </PopoverTrigger>
                            <PopoverContent className="flex flex-col justify-center items-center w-[fit-content]">  
                                <Link href={"/dashboard"}>
                                    <Button className="bg-amber-500 mt-[10px] w-[100px]">
                                        داشبورد
                                        <DashboardIcon/>
                                    </Button>
                                </Link>
                                <Link href={"/dashboard/shop"}>
                                    <Button className="bg-amber-500 mt-[10px] w-[100px]">
                                        فرشگاه من
                                        <ShopIcon/>
                                    </Button>
                                </Link>
                                <Link href={"/dashboard/shop"}>
                                    <Button className="bg-amber-500 mt-[10px] w-[100px]">
                                            پروفایل
                                        <Person/>
                                    </Button>
                                </Link>
                                    <Button className="bg-red-500 mt-[10px] w-[100px]" onClick={e => {
                                        setLogout(true)
                                    }}>
                                            خروج
                                        <PowerIcon/>
                                    </Button>
                            </PopoverContent>
                        </Popover>
                        <Dialog open={logout} onOpenChange={e => {setLogout(false)}}>
                            <DialogContent>
                            <DialogHeader>
                                از خروج مطمِن هستید ؟ 
                            </DialogHeader>
                            <hr/>
                            <DialogDescription>
                                <Label>
                                    سیستم پس از ورود شما را شاناسایی میکند و دیگر نیازی به وارد کردن رمز عبور و نام کاربری نیست با خروج دستی این امکان از شما گرفته خواهد شد 
                                </Label>
                                <div className="flex ">
                                    <Button className="bg-red-500 mt-[10px] w-[100px]" onClick={e => {
                                        localStorage.removeItem("token") 
                                        localStorage.removeItem("name")
                                        toast.success("خروج با موفقیت انجام شد")
                                        dispatch({
                                            type : "CLEAR_USER_DATA"
                                        })
                                        setLogout(false)
                                    }} >
                                            خروج
                                        <PowerIcon/>
                                    </Button>
                                    <Button className="bg-amber-500 mt-[10px] w-[100px] ml-[10px]" onClick={e => {setLogout(false)}}>
                                                لغو
                                        <X/>
                                    </Button>
                                </div>
                                </DialogDescription>
                            </DialogContent>
                        </Dialog>
                    </>
                    : 
                    <>
                    <Button className="bg-amber-500 w-[100%]">
                        <Link href={"/login"} className="w-[100%] flex"> ورود / ثبت‌‌‌‌ نام<Person/>‌‌‌‍</Link>
                    </Button>
                  </>
                       }
                    
                </div>
                
                <ToastContainer/>
            </div>
        </>
    )
}

export default Header
