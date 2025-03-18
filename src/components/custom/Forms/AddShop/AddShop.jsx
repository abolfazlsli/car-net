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
 
const AddShopCp = () => {
    const router = useRouter()
    const closeHandler = () => {
        router.back()
    }
    const [pagedata , setPageData] = useState(
        {
            shopname : "" , 
            shopphone : "" ,
            addres : "" ,
            bio : ""

        }
    )
    return (    
        <div className="w-full">
            <Dialog open={true} onOpenChange={closeHandler}>
                <DialogContent className="md:w-full md:max-w-[50vw] max-w-[100vw]">
                    <DialogHeader> 
                        <DialogTitle>
                            اضافه کردن فروشگاه
                        </DialogTitle>
                    </DialogHeader>
                    <DialogDescription className="pb-[50px]">
                        <div className="overflow-y-scroll h-[400px] md:h-[100%] md:overflow-auto">
                            <div className="md:flex md:flex-row md:gap-2 flex flex-col-reverse gap-2">
                                <InputC type="tel" placeholder="شماره تماس" text="شماره تماس" />
                                <InputC type="text" placeholder="نام فروشگاه" text="نام فروشگاه" /> 
                            </div>
                            <div className="md:flex md:flex-row md:gap-2 flex flex-col-reverse gap-2">
                                <InputC type="tel" placeholder="شماره تماس" text="شماره تماس" />
                                <InputC type="text" placeholder="نام فروشگاه" text="نام فروشگاه" /> 
                            </div>
                            <div className="md:flex md:flex-row md:gap-2 flex flex-col-reverse gap-2">
                                <InputC type="tel" placeholder="شماره تماس" text="شماره تماس" />
                                <InputC type="text" placeholder="نام فروشگاه" text="نام فروشگاه" /> 
                            </div>
                        </div>
                        <div className="md:flex md:flex-row md:gap-2 flex flex-row gap-2 mt-[10px] md:mt-[0]">
                            <Button className="bg-amber-500 w-[100%] rounded-full mt-[10px]">
                                قدم بعدی
                            </Button>
                            <Button className="bg-amber-300 w-[100%] rounded-full mt-[10px]" onClick={closeHandler}>
                                لغو
                            </Button>
                        </div>
                    </DialogDescription>
                </DialogContent>
            </Dialog>
        </div>
    )
}

export default AddShopCp;