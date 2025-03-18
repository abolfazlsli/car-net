'use client'
import { 
    Dialog ,
    DialogContent ,
    DialogHeader ,
    DialogTitle ,
    DialogDescription ,
    DialogFooter ,
    DialogClose ,  
 } from "@/components/ui/dialog"
 import { useRouter } from "next/navigation"
 import InputC from "../../input-c"
 
const AddShop = () => {
    const router = useRouter()
    const closeHandler = () => {
        router.back()
    }
    return (    
        <div className="w-full">
            <Dialog open={true} onOpenChange={closeHandler}>
                <DialogContent className="w-full max-w-[80vw]">
                    <DialogHeader> 
                        <DialogTitle>
                            اضافه کردن فروشگاه
                        </DialogTitle>
                    </DialogHeader>
                    <DialogDescription>
                        <div className="flex flex-row gap-2">
                            <InputC type="text" placeholder="نام فروشگاه" />
                            <InputC type="text" placeholder="نام فروشگاه" />
                        </div>
                    </DialogDescription>
                </DialogContent>
            </Dialog>
        </div>
    )
}

export default AddShop;