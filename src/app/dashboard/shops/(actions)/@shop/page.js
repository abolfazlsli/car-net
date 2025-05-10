"use client"
import { readMyCars } from "@/app/apiHandler/apis"
import { CarCard } from "@/components/custom/car-card"
import { CarHeadMrk } from "@/components/icons/Cars"
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
  } from "@/components/ui/tabs"
import { ScrollArea } from "@radix-ui/react-scroll-area"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"
export default function Shop(){
    const [activetab , setActiveTab] = useState("all")
    const [brnads , setBrands] = useState(null)
    const [changeFlag , setChangeFlag] = useState(false)
    const cars = useRef([])
    useEffect(
        () => {
            setBrands(false)
            readMyCars({from : 0 , to : 10}).then(
                res => {
                    cars.current = res.data.apidata
                    setChangeFlag(!changeFlag)
                }
                
            )
        } , [Shop]
    )
    return (
        <>
        <div className="w-[100%]">
            {
                brnads === null ? <h1>loading</h1> : brnads !== false ? <>
                    <Tabs defaultValue="all" className="w-[80%] m-[50px]" onValueChange={setActiveTab}>
                        <TabsList className="w-[100%] flex justify-start rounded-2xl md:overflow-auto overflow-scroll bg-white shadow-md">
                            <TabsTrigger value="all" className={`w-[100px] rounded-2xl ${activetab === "all" ? " !bg-amber-100" : ""} `}>
                                همه
                            </TabsTrigger>
                        </TabsList>
                        <TabsContent value="all" className="shadow-sm">
                            <h1>
                                Test
                            </h1>
                        </TabsContent>
                    </Tabs>
                </> : cars.current.length > 0 ? <>
                    <div className="w-[100%] flex justify-center items-center">
                        <div className="flex flex-wrap justify-start items-start w-[95%] h-[fit-content] p-[10px] ring-1 ring-gray-300 mt-[90px] rounded-xl overflow-auto" dir="rtl">
                                {
                                cars.current.map ((event , index) => (
                                    <>
                                        <CarCard data={event} key={index} />
                                    </>
                                    )
                                )
                                }
                        </div>
                    </div>
                </> :
                <>
                 <div className="w-[100%] flex justify-center items-center mt-[20px]">
                    <div className="w-[90%] h-[450px] ring-2 ring-gray-100 rounded-xl flex justify-center items-center">
                        <div className="flex flex-col justify-center items-center">
                            <CarHeadMrk className="w-[200px] h-[200px] text-gray-300 "/>
                            <h1 className="text-2xl mt-[20px] text-gray-300">
                                خودرویی ثبت نکردید
                            </h1>
                            <Link href="/dashboard/shops/addcar" className="bg-amber-300 w-[100%] h-[50px] p-[10px] flex justify-center items-center rounded-md shadow-md mt-[10px]">
                                <h1 className="text-white">
                                    اولین ماشینت رو بزار 
                                </h1>
                            </Link>
                        </div>
                    </div>
                 </div>
                </>
            }
            
        </div>
        </>
    )
}
