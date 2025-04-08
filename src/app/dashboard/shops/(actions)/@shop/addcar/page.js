"use client"
import { getBrandFilds, GetCarsBrands } from "@/app/apiHandler/apis"
import InputC from "@/components/custom/input-c"
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
  } from "@/components/ui/dialog"

  import { Badge } from "@/components/ui/badge" 

  import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select" 


import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"


const AddCarPage  = () => {
  const router = useRouter()
  const fildsdata = useState()
  const [pagedata , setPageData] = useState(
    {
      brands : [] ,
      filds : null ,
      senders : null ,
      setep : 1
    }
  )
  useEffect(
    () => {
      GetCarsBrands().then(
        res => {
          
          setPageData(
            {
              ...pagedata , brands : res.data.apidata
            }
          )
        }
      )
    } , []
  )
  const handelClose = () => {
    router.back()
  }
  const changeBrandHandler = (e) => {
    getBrandFilds({"brandid" : e}).then(
      res => {
        let tempdata = []
          res.data.data.map(
            d => {
              console.log("d : " ,d)
              tempdata.push(
                {
                  name : d.fieldname ,
                  value : "" ,
                  type : d.fieldtype , 
                  label : d.fieldlabel
                }
              )
            }
          )
         setPageData(
        {
          ...pagedata , filds : res.data.data , senders : tempdata
        }
      )
      }
    )
     
  }
    return (
        <div>
          {pagedata.setep === 1 ? <>
            <Dialog open={true} onOpenChange={handelClose}>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>
                      افزودن خودرو
                  </DialogTitle>
                  <DialogDescription>
                      <Select onValueChange={(e) => changeBrandHandler(e)}>
                        <div className="pt-[10px] pb-[10px]">
                          <SelectTrigger className="rounded-full text-right">
                            <SelectValue placeholder="ماشینت چیه ؟" />
                          </SelectTrigger>
                        </div>
                        <SelectContent>
                          <div className="pt-[10px] pb-[10px]">
                            {
                              pagedata.brands.map(
                                (e , index) => (
                                  <SelectItem value={e.value} key={index}>
                                    {e.label}
                                  </SelectItem>
                                )
                              )
                            }
                          </div>
                        </SelectContent>
                      </Select>
                      {
                        pagedata.filds ? 
                        pagedata.filds.map(
                          (e , index) => (
                              e.fieldtype === "select" ?
                              <div key={index}>
                              <h1 className="text-right w-[100%] pr-[10px]">
                                {e.fieldlabel}
                              </h1>
                               <Select>
                                <div className="pt-[10px] pb-[10px]">
                                  <SelectTrigger className="rounded-full text-right">
                                    <SelectValue placeholder={e.fieldlabel} />
                                  </SelectTrigger>
                                </div>
                                <SelectContent>
                                {console.log(e.options)}
                                  <div className="pt-[10px] pb-[10px]">
                                    {
                                      e.options.map(
                                        event => (
                                          <SelectItem value={event.value}>
                                            
                                            {event.text}
                                          </SelectItem>
                                        )
                                      )
                                    }
                                  </div>
                                </SelectContent>
                              </Select>
                              </div> : e.fieldtype === "color" ? <>
                                <h1 className="text-right w-[100%] pr-[10px]">
                                  رنگ
                                </h1>
                                <div className="flex w-[100%] justify-center items-center">
                                      {
                                        e.options.map(
                                          (color , index) => (
                                            <>
                                            <div className={`w-[50px] h-[50px] rounded-full m-[10px] shadow-md ring-1 ring-gray-200 cursor-pointer ${pagedata.senders.filter(
                                              item => item.name === "color" 
                                            ).value ===color.value ? "ring-4" : "" }` } style={{backgroundColor:color.value}} onClick={e => setPageData({...pagedata , senders : [...pagedata.senders , {name : "color" , value : color.value , type : "color" , label : "رنگ" }]})}></div>
                                              {/* <Badge className={`bg-${color.value}-400`} key={index}>
                                                {
                                                  color.text
                                                }
                                              </Badge> */}
                                            </>
                                          )
                                        )
                                      }
                                  </div>
                              </> : <></>
                          )
                        )
                        : <></>
                      }
                      <div className="flex justify-center items-center">
                        <Button className="bg-amber-500 w-[100%] rounded-full mt-[20px]" onClick = {e => {console.log(pagedata)}}>
                          گام بعد
                        </Button>
                      </div>
                  </DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>
          </> : pagedata.setep === 2 ? <>
          <Dialog open={true} onOpenChange={handelClose}>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>
                      افزودن خودرو
                  </DialogTitle>
                  <DialogDescription>
                      <Select onValueChange={(e) => changeBrandHandler(e)}>
                      </Select>
                      <div className="flex justify-center items-center">
                        <Button className="bg-amber-500 w-[100%] rounded-full mt-[20px]" onClick = {e => {console.log(pagedata)}}>
                          گام بعد
                        </Button>
                      </div>
                  </DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>
          </> : <></>}
           

        </div>
    )
}


export default AddCarPage