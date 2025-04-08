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
import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import { Input } from "@/components/ui/input"

const AddCarPage = () => {
  const form = useForm()
  const router = useRouter()
  const [pagedata, setPageData] = useState({
    brands: [],
    filds: null,
    setep: 1 , 
    pics : null , 
    datas : null
  })

  useEffect(() => {
    GetCarsBrands().then(res => {
      setPageData({
        ...pagedata,
        brands: res.data.apidata
      })
    })
  }, [])

  const sendHandler = (d) => {
    const picdata = []
    const fieldData = []
    pagedata.filds.map(
      item => {
        fieldData.push(
          {
            fieldtype : item.fieldtype ,
            fieldname : item.fieldname ,
            fieldvalue : d[item.fieldname] ,
            fieldlabel : item.fieldlabel
          }
        )
      }
    )
    setPageData({...pagedata , datas : fieldData})
  }
  const handelClose = () => {
    router.back()
  }

  const changeBrandHandler = (e) => {
    getBrandFilds({ "brandid": e }).then(res => {
      setPageData({
        ...pagedata,
        filds: res.data.data,

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
                  <form onSubmit={form.handleSubmit(sendHandler)}>
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
                    <div className="h-[400px] overflow-y-scroll">
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
