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
 
const AddShopCp = () => {
    const router = useRouter()
    const profilePageHandler = () => {

    }
    const closeHandler = () => {
        router.back()
    }
    const [profilepage , setProfilePage] = useState(false)
    const [pagedata , setPageData] = useState(
        {
            name : "" , 
            phone : "" ,
            address : "" ,
            bio : "",
            profile : null,
            banner : null
        }
    )
    const handelImage = (e , type) => {
        const file = e.target.files[0]
        if (file){
            const imageurl = URL.createObjectURL(file)
            setPageData({...pagedata , [type] : imageurl})
        }
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
                                <input type="file" accept="image/*" id="addbanner" hidden onChange={e => handelImage(e , "banner")} />
                                <input type="file" accept="image/*" id="addprofile" hidden onChange={e => handelImage(e , "profile")} />
                                <div className="relative w-[100%] h-[100px] bg-amber-300 flex justify-center items-center cursor-pointer rounded-md">
                                    <Label htmlFor="addbanner">
                                        {
                                            pagedata.banner ? (
                                                <>
                                                    <img src={pagedata.banner} alt ="banner" className="w-[720px] h-[100px] object-cover rounded-md" />
                                                    <EditImageIcon className="w-[50px] h-[50px] absolute text-white fill-white top-2 cursor-pointer"/>
                                                </>
                                            ) : <>
                                                    <div className="flex justify-center items-center">
                                                        <AddImage className="w-[50px] h-[50px] fill-white text-white" />
                                                        <h1 className="text-white pl-[20px]">
                                                            افزودن عکس بنر برای فروشگاه
                                                        </h1>
                                                    </div>
                                                </>
                                        }
                                        
                                    </Label>
                                    <Label htmlFor="addprofile">
                                        {
                                            pagedata.profile ? (
                                                <div className="absolute bg-amber-300 rounded-full p-[5px] w-[200px] h-[200px] bottom-[-220px] md:w-[100px] md:h-[100px] flex justify-center items-center md:bottom-[-50px] md:right-10 ring-4 ring-white">
                                                    <img src={pagedata.profile} className=" w-[100%] h-[100%] rounded-full md:w-[100%] md:h-[100%] fill-white text-white" />
                                                </div>
                                            ) : <>
                                                    <div className="absolute bg-amber-300 rounded-full p-[10px] w-[200px] h-[200px] bottom-[-220px] md:w-[100px] md:h-[100px] flex justify-center items-center md:bottom-[-50px] md:right-10 ring-4 ring-white">
                                                    <AddPerson className=" w-[100px] h-[100px] md:w-[50px] md:h-[50px] fill-white text-white" />
                                                    </div>
                                                </>
                                        }
                                        
                                    </Label>
                                </div>
                            </div>
                            <div className="md:flex md:flex-row md:gap-2 flex flex-row gap-2 md:mt-[0]">
                                <Button className="bg-amber-500 w-[100%] rounded-full">
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
                                <div className="w-[100%] ml-[10px]">
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