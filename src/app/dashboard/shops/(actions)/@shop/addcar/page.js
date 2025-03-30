"use client"
import InputC from "@/components/custom/input-c"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
import { useRouter } from "next/navigation"
import { useState } from "react"


const AddCarPage  = () => {
  const router = useRouter()
  const [pagedata , setPageData] = useState(
    {
      
    }
  )
  const handelClose = () => {
    router.back()
  }
    return (
        <div>
            <Dialog open={true} onOpenChange={handelClose}>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>
                      افزودن خودرو
                  </DialogTitle>
                  <DialogDescription>
                      <InputC text={""}/>
                  </DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>

        </div>
    )
}


export default AddCarPage