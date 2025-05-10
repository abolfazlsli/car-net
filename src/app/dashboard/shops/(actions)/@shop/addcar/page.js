"use client"
import { getBrandFilds, GetCarsBrands, sendCarAssets, sendCars, uploadFile } from "@/app/apiHandler/apis"
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
    Form,
    FormItem,
    FormLabel,
    FormControl,
    FormDescription,
    FormMessage,
    FormField,
} from "@/components/ui/form"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { useRouter } from "next/navigation"
import { useEffect, useRef, useState } from "react"
import { useForm } from "react-hook-form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import AddImage from "@/components/icons/AddImage"
import { Label } from "@radix-ui/react-label"
import { token } from "@/app/redusers/data"
import { toast } from "react-toastify"

const AddCarPage = () => {
  const form = useForm()
  const router = useRouter()
  const [picaddres , setPicAddres] = useState([])
  const [picsfile , setPicsFile] = useState([])
  const filenames = useRef([])
  const [pagedata, setPageData] = useState({
    brands: [],
    filds: null,
    setep: 1 , 
    datas : null ,
    brandid : null ,
    title : null , 
    description : null ,
    price : 0 ,
    model : 0,
    token : token ,
    imagecover : ""
  })

  useEffect(() => {
    GetCarsBrands().then(res => {
      setPageData({
        ...pagedata,
        brands: res.data.apidata
      })
    })
  }, [])


  const setDataHandler = (d) => {
    const saveandclose = () => {
      toast.success("ماشین شما با موفقیت ثبت شد") 
      router.back()
    }
    const fieldData = []
    pagedata.filds.map(
      item => {
        fieldData.push(
          {
            fieldtype : item.fieldtype ,
            fieldname : item.fieldname ,
            fieldvalue : d[item.fieldname] ,
            fieldlabel : item.fieldlabel,
          }
        )
      }
    )
    setPageData({...pagedata, datas : fieldData, brandid : pagedata.brandid ,title : pagedata.title , description : pagedata.description , imagecover : picsfile[0].name})
    // console.log(pagedata , picaddres , picsfile)
    sendCars({...pagedata, datas : fieldData, brandid : pagedata.brandid ,title : pagedata.title , description : pagedata.description , imagecover : picsfile[0].name , images : filenames.current}).then(
      res => {
        console.log(res)
        toast.success(
          "ماشین با موفقیت ثبت شد"
        )
        router.back()
      }
    ).catch(
      () => 
      {
        toast.error(
          "در ثبت اگهی مشکلی پیش اومده"
        )
      }
    )
  }
  const addPicHandler = (data) => {
    let picaddrestemp = [...picaddres]
    let picfilestemp = [...picsfile]
    const file = data.target.files[0]
    const imageurl = URL.createObjectURL(file)
    picaddrestemp.push(imageurl)
    picfilestemp.push(file)
    setPicAddres(picaddrestemp)
    setPicsFile(picfilestemp)
    uploadFile(file).then(
      (res) => {
        filenames.current.push(res.data.digitalname)
      }
    ).catch(
      err => {
        toast.error(
          "در اپلود فایل مشکل پیش اومده "
        )
      }
    )
  }
  const handelClose = () => {
    router.back()
  }

  const changeBrandHandler = (e) => {
    getBrandFilds({ "brandid": e }).then(res => {
      setPageData({
        ...pagedata,
        filds: res.data.data,
        brandid : e
      })
    })
  }

  return (
    <div>
      {pagedata.setep === 1 ? (
        <Dialog open={true} onOpenChange={handelClose}>
          <DialogContent className="max-w-[600px]">
            <DialogHeader>
              <DialogTitle>افزودن خودرو</DialogTitle>
              <DialogDescription>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(setDataHandler)}>
                    <h1 className="text-right mb-[10px] mt-[10px]">
                      موضوع 
                    </h1>
                    <Input type="text" className="rounded-full text-right mb-[10px]" placeholder="موضوع آگهی را وارد کنید " value={pagedata.title} onChange={e => setPageData({...pagedata , title : e.target.value})} />
                    <div className="w-[100%] flex justify-center items-center">
                      <div className="w-[50%]">
                        <h1 className="text-right mb-[10px] mt-[10px]">
                          قیمت 
                        </h1>
                        <Input type="text" className="rounded-full text-right mb-[10px]" placeholder="قیمت خودرو را وارد کنید " value={pagedata.price} onChange={e => setPageData({...pagedata , price : e.target.value})} />
                      </div>
                      <div className="w-[50%] ml-[10px]">
                        <h1 className="text-right mb-[10px] mt-[10px]">
                          مدل 
                        </h1>
                        <Input type="text" className="rounded-full text-right mb-[10px]" placeholder="مدل خودرو را وارد کنید " value={pagedata.model} onChange={e => setPageData({...pagedata , model : e.target.value})} />
                      </div>
                    </div>
                    <div className="w-[100%] h-[50px] ring-1 ring-gray-200 mb-[20px] rounded-xl overflow-x-auto flex justify-end items-center flex-wrap p-[5px]">
                      {
                        picaddres.map(
                          (pic , index) => (
                            <div className="w-[40px] h-[40px] flex justify-center items-center mr-[5px]">
                            <img src={pic} key={index} className="w-[90%] h-[90%] object-fill rounded-md" />
                            </div>
                          )
                        )
                      }
                      
                      <div className="ring-1 ring-gray-200 w-[40px] h-[40px] rounded-md cursor-pointer flex justify-center items-center">
                      <input type="file" hidden id="imageholder" onChange={e => addPicHandler(e)}/>
                      <Label htmlFor="imageholder">
                        <AddImage className='w-[95%] h-[95%]'/>
                      </Label>
                      </div>
                    </div>
                    <h1 className="text-right mb-[10px] mt-[10px]">
                        توضیحات
                    </h1>
                    <Textarea className="resize-none w-[100%] h-[100px] text-right" value={pagedata.description} onChange={e => setPageData({...pagedata , description : e.target.value})} placeholder="توضیحات اگهی" />
                    <Select onValueChange={(e) => changeBrandHandler(e)}>
                      <div className="pt-[10px] pb-[10px]">
                        <SelectTrigger className="rounded-full text-right">
                          <SelectValue placeholder="ماشینت چیه ؟" />
                        </SelectTrigger>
                      </div>
                      <SelectContent>
                        <div className="pt-[10px] pb-[10px]">
                          {pagedata.brands.map((e, index) => (
                            <SelectItem value={e.value} key={index}>
                              {e.label}
                            </SelectItem>
                          ))}
                        </div>
                      </SelectContent>
                    </Select>
                    
                    {pagedata.filds &&
                    <div className="h-[150px] overflow-y-scroll">
                      {pagedata.filds.map((f, index) =>
                        f.fieldtype === "select" ? (
                          <div key={index} className="mt-[10px] mb-[10px]">
                            <h1 className="text-right mt-[5px] mb-[5px]">
                              {f.fieldlabel}
                            </h1>
                            <FormField
                              control={form.control}
                              name={f.fieldname}
                              render={({ field }) => (
                                <Select {...field} onValueChange={field.onChange}>
                                  <SelectTrigger className="rounded-3xl">
                                    <SelectValue placeholder={f.fieldlabel} />
                                  </SelectTrigger>
                                  <SelectContent>
                                    {(f.options || []).map((option, i) => (
                                      <SelectItem value={option.value} key={i}>
                                        {option.text}
                                      </SelectItem>
                                    ))}
                                  </SelectContent>
                                </Select>
                              )}
                            />
                          </div>
                        ) : f.fieldtype === "color" ? 
                        <div key={index}>
                        <FormField 
                          control = {form.control} 
                          name={f.fieldname}
                          render = {({ field }) => (
                            <>
                              <h1 className="text-right">
                                  {
                                    f.fieldlabel
                                  }
                                </h1>
                              <div className="w-[100%] flex justify-center items-center flex-wrap">
                              <Select onValueChange={field.onChange}>
                                  <SelectTrigger className="items-center rounded-2xl">
                                    <SelectValue placeholder="رنگ" />
                                  </SelectTrigger>
                                  <SelectContent >
                                {f.options.map(
                                  (color , index) =>
                                  (
                                    <SelectItem value={color.value}>
                                      <div className="flex justify-center items-center cursor-pointer w-[100%]">
                                        <div className={`w-[15px] h-[15px] rounded-full m-[10px] ring-2 ring-gray-300 shadow-sm cursor-pointer`} style={{backgroundColor : color.value }} key={index}></div>
                                        <h1 className="m-0 p-0">
                                          {color.text}
                                        </h1>
                                      </div>
                                    </SelectItem>
                                  )
                                )}
                                  </SelectContent>
                                  </Select>
                                </div>
                            </>
                          )}
                        />
                        </div>
                         : null
                      )}
                      </div>
                      }

                    <div className="flex justify-center items-center">
                      <Button
                        className="bg-amber-500 w-[100%] rounded-full mt-[20px]"
                        type="submit"
                        onClick={(e) => {
                        }}
                      >
                        ثبت
                      </Button>
                      <Button
                        className="bg-amber-300 w-[100%] rounded-full mt-[20px] ml-[10px]"
                        onClick={(e) => {
                          handelClose()
                        }}
                      >
                        لغو
                      </Button>
                    </div>
                  </form>
                </Form>
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      ) :  null}
    </div>
  )
}

export default AddCarPage
