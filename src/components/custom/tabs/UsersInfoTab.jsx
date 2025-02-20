
import { GetMe } from "@/app/apiHandler/apis"
import { ScrollArea } from "@radix-ui/react-scroll-area"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import InputC from "../input-c"
import { toast } from "react-toastify"
import ButtonC from "../button-c"
import { Button } from "@/components/ui/button"

const UserInfo = () => {
    const [me , setMe] = useState()
    const {userinfo} = useSelector((state) => state)
    const userNameHandler = (data) => {
        CheckUsernName(data).then(
            res => {
                console.log(res)
            }
        )
    }
    useEffect(() => {
        let data = {
            token : userinfo.token
        }
        GetMe(data).then(
            res => {
                console.log(res)
                setMe(res.data)
            }
        ).catch(
            err => {toast.error("مشکلی پیش اومده :)")}
        )
    } , [])
    return (
        <>
            <h1 className="text-right text-[25px]">
                اطلاعات کاربری
            </h1>
            <ScrollArea className="flex flex-col justify-center items-center">
                <div className="w-[60%] h-[100%]">
                <div className="flex justify-between flex-col md:flex-row">
                    <div className="m-[5px] w-[90%] md:w-[50%]">
                        <InputC text={"نام خانوادگی"} placeholder={"نام خانوادگی"} type={"text"} value={me?.lastname}/>
                    </div>
                    <div className="m-[5px] w-[90%] md:w-[50%]">
                        <InputC text={"نام"} placeholder={"نام"} type={"text"} value={me?.name}/>
                    </div>
                </div>
                <div className="flex justify-between flex-col md:flex-row">
                    <div className="m-[5px] w-[90%] md:w-[50%]">
                        <InputC text={"شماره تلفن"} placeholder={"شماره تلفن"} type={"phone"} value={me?.phone}/>
                    </div>
                    <div className="m-[5px] w-[90%] md:w-[50%]">
                        <InputC text={"نام کاربری"} placeholder={"نام کاربری"} type={"text"} value={me?.username}/>
                    </div>
                </div>
                <div className="flex justify-between flex-col md:flex-row">
                <div className="m-[5px] w-[90%] md:w-[50%]">
                        <Button className="bg-amber-500 w-[100%] rounded-full mt-[20px] ml-[5px]">
                            ثبت
                        </Button>
                    </div>
                    <div className="m-[5px] w-[90%] md:w-[50%]">
                        <Button className="bg-amber-300 w-[100%] rounded-full mt-[20px] ml-[5px]">
                            لغو
                        </Button>
                    </div>
                </div>
                </div>
            </ScrollArea>
        </>
    )
}
export default UserInfo