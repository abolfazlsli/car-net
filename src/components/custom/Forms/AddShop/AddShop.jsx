'use client'
import { 
    Dialog ,
    DialogContent ,
    DialogHeader ,
    DialogTitle ,
    DialogDescription ,
 } from "@/components/ui/dialog"
 import { useRouter } from "next/navigation"
 import InputC from "../../input-c"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@radix-ui/react-label"
import AddImage from "@/components/icons/AddImage"
import Person from "@/components/icons/Person"
import AddPerson from "@/components/icons/AddPerson"
import { EditImageIcon } from "@/components/icons/Edits"
import { DeleteImage } from "@/components/icons/Delete"
import { FillX } from "@/components/icons/x"
import { sendFile } from "@/app/apiHandler/apis"
import { token } from "@/app/redusers/data"
import { AddShop } from "@/app/apiHandler/apis"
import { toast } from "react-toastify"
import { useSelector } from "react-redux"
const AddShopCp = () => {
    const router = useRouter()
    const profilePageHandler = () => {

    }
    const closeHandler = () => {
        router.back()
    }
    const tokenselector = useSelector((state) => state.userinfo)
    console.log(tokenselector.token)
    const tok = token ? token : tokenselector.token
    const [profilepage , setProfilePage] = useState(false)
    const [pagedata , setPageData] = useState(
        {
            name : "" , 
            phone : "" ,
            address : "" ,
            bio : "",
            preprofile : null,
            prebanner : null ,
            profile : null , 
            banner : null , 
            token : tok
        }
    )
    const handelImage = (e , type) => {
        const file = e.target.files[0]
        if (file){
            const imageurl = URL.createObjectURL(file)
            setPageData({...pagedata , ["pre" + type] : imageurl , [type] : file})
        }
    }
    const handelSendData = () => {
        console.log(pagedata)
        let sendprofile = false
        let sendbanner = false
        let generateshop = false
        if (pagedata.banner && pagedata.profile) { 
            sendFile({
                file : pagedata.banner , 
                dicription : "عکس بنر فرشگاه" + pagedata.name , 
                token : tok
            }).then(
                res => {
                    console.log(res)
                    sendbanner = true
                }
            ).catch(
                err => {
                    console.log(err)
                }
            )
            sendFile({
                file : pagedata.profile , 
                dicription : "عکس پروفایل فرشگاه" + pagedata.name , 
                token : tok
            }).then(
                res => {
                    sendprofile = true
                    console.log(res)
                }
            ).catch(
                err => {
                    console.log(err)
                }
            )
        }
        let shopdata = {
            name : pagedata.name , 
            address : pagedata.address , 
            phone : pagedata.phone , 
            profilepic : pagedata.profile.name ,
            bio : pagedata.bio , 
            banner : pagedata.banner.name , 
            token : tok
        }
        AddShop(shopdata).then(
            () => {
                toast.success(
                    "فروشگاه با موفقیت ثبت شد"
                )
                setTimeout(() => {
                    window.location.reload()
                } , 5000)
            }
        ).catch(
            () => {
                toast.error(
                    "دیتا ارسال نشد"
                )
            }
        )
    
    }
    return (    
        <div className="w-full">
            {
                profilepage ? <>
                <Dialog open={true} onOpenChange={closeHandler}>
                    <DialogContent className="md:w-full md:max-w-[50vw] max-w-[100vw]">
                        <DialogHeader> 
                            <DialogTitle>
                                اضافه کردن پروفایل
                            </DialogTitle>
                        </DialogHeader>
                        <DialogDescription>
                            <div className="overflow-y-scroll h-[400px] p-[5px] md:h-[300px] md:overflow-auto">
                                <input type="file" accept="image/*" id="addbanner" hidden  onChange={e => handelImage(e , "banner")} />
                                <input type="file" accept="image/*" id="addprofile" hidden onChange={e => handelImage(e , "profile")} />
                                <div className="relative w-[100%] h-[100px] bg-amber-300 flex justify-center items-center cursor-pointer rounded-xl">
                                    
                                        {
                                            pagedata.prebanner ? (
                                                <>
                                                    <Label htmlFor="addbanner">
                                                        <img src={pagedata.prebanner} alt ="banner" className="w-[720px] h-[100px] object-cover rounded-xl" />
                                                        <EditImageIcon className="w-[50px] h-[50px] absolute text-white fill-white top-2 cursor-pointer"/>
                                                    </Label>     
                                                    
                                                    <DeleteImage className="w-[50px] h-[50px] absolute text-white fill-white top-2 left-16 cursor-pointer" onClick={e => setPageData({...pagedata , banner : null})}/>
                                                </>
                                            ) : <>
                                               <Label htmlFor="addbanner">
                                                    <div className="flex justify-center items-center">
                                                        <AddImage className="w-[50px] h-[50px] fill-white text-white" />
                                                        <h1 className="text-white pl-[20px]">
                                                            افزودن عکس بنر برای فروشگاه
                                                        </h1>
                                                    </div>
                                                    </Label>
                                                </>
                                        }
                                    
                                        {
                                            pagedata.preprofile ? (
                                                <div className="absolute bg-amber-300 rounded-full p-[0px] w-[200px] h-[200px] bottom-[-220px] md:w-[100px] md:h-[100px] flex justify-center items-center left-[20%] md:left-auto md:bottom-[-50px] md:right-10 ring-4 ring-white">
                                                    <Label htmlFor="addprofile" className="bg-amber-300 rounded-full p-[0px] w-[200px] h-[200px] bottom-[-220px] md:w-[100px] md:h-[100px] flex justify-center items-center left-[20%] md:left-auto md:bottom-[-50px] md:right-10 ring-4 ring-white">
                                                        <img src={pagedata.preprofile} className=" w-[100%] h-[100%] rounded-full md:w-[100%] md:h-[100%]" />
                                                        <EditImageIcon className={"absolute text-amber-300 left-4 w-[50px] h-[50px] md:bottom-[-10px] md:left-[-10px] bottom-0"} />
                                                    </Label>
                                                    <FillX className="absolute w-[30px] h-[30px] md:h-[30px] md:w-[30px] md:top-[-5px] md:right-[-5px] bg-white right-4 top-0 fill-amber-300 text-amber-300 ring-2 ring-white rounded-full" onClick={() => setPageData({...pagedata , preprofile : null , profile : null})}/>
                                                </div>
                                            ) : <>
                                                    <Label htmlFor="addprofile">
                                                        <div className="absolute bg-amber-300 rounded-full p-[10px] w-[200px] h-[200px] bottom-[-220px] md:w-[100px] md:left-auto left-[20%] md:h-[100px] flex justify-center items-center md:bottom-[-50px] md:right-10 ring-4 ring-white">
                                                        <AddPerson className=" w-[100px] h-[100px] md:w-[50px] md:h-[50px] fill-white text-white" />
                                                        </div>
                                                    </Label>
                                                </>
                                        }
                                        
                                    
                                </div>
                            </div>
                            <div className="md:flex md:flex-row md:gap-2 flex flex-row gap-2 md:mt-[0]">
                                <Button className="bg-amber-500 w-[100%] rounded-full" onClick={handelSendData}>
                                    ثبت
                                </Button>
                                <Button className="bg-amber-300 w-[100%] rounded-full" onClick={() => setProfilePage(false)}>
                                    بازگشت
                                </Button>
                            </div>
                        </DialogDescription>
                    </DialogContent>
                </Dialog>
                </> : <>
                            <Dialog open={true} onOpenChange={closeHandler}>
                <DialogContent className="md:w-full md:max-w-[50vw] max-w-[100vw]">
                    <DialogHeader> 
                        <DialogTitle>
                            اضافه کردن فروشگاه
                        </DialogTitle>
                    </DialogHeader>
                    <DialogDescription className="pb-[50px]">
                        <div className="overflow-y-scroll h-[400px] p-[5px] md:h-[100%] md:overflow-auto">
                            <div className="md:flex md:flex-row md:gap-2 flex flex-col-reverse gap-2">
                                <InputC type="tel" placeholder="شماره تماس" text="شماره تماس" value={pagedata.phone} onChange={e => setPageData({...pagedata , phone : e.target.value})} />
                                <InputC type="text" placeholder="نام فروشگاه" text="نام فروشگاه" value={pagedata.name} onChange={e => setPageData({...pagedata , name : e.target.value})} /> 
                            </div>

                            <div className="md:flex md:flex-row md:gap-2 flex flex-col-reverse gap-2">
                            <InputC type="tel" placeholder="آدرس فروشگاه" text="آدرس فروشگاه" onChange={e => setPageData({...pagedata , address : e.target.value})} value={pagedata.address} />
                                <div className="w-[100%] md:ml-[10px]">
                                    <h3 className="m-[10px] text-right w-[95%]" >
                                        بیوگرافی یا توضیحات
                                    </h3>
                                    <Textarea placeholder="نوضیحات یا بیوگرافی از فروشگاه شما" className="resize-none w-[100%] h-[100px] text-right rounded-2xl" value={pagedata.bio} onChange={e => setPageData({...pagedata , bio : e.target.value})} />
                                </div>
                            </div>
                        </div>
                        <div className="md:flex md:flex-row md:gap-2 flex flex-row gap-2 mt-[10px] md:mt-[0]">
                            <Button className="bg-amber-500 w-[100%] rounded-full mt-[10px]" onClick={() => setProfilePage(true)}>
                                قدم بعدی
                            </Button>
                            <Button className="bg-amber-300 w-[100%] rounded-full mt-[10px]" onClick={closeHandler}>
                                لغو
                            </Button>
                        </div>
                    </DialogDescription>
                </DialogContent>
            </Dialog>
                </>
            }
        </div>
    )
}

export default AddShopCp;