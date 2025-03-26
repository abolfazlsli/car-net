"use client"
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
  } from "@/components/ui/tabs"
import { useState } from "react"
export default function Shop(){
    const [activetab , setActiveTab] = useState("all")
    return (
        <>
        <div className="w-[100%]">
            <Tabs defaultValue="all" className="w-[80%] m-[50px]" onValueChange={setActiveTab}>
                <TabsList className="w-[100%] flex justify-start rounded-2xl md:overflow-auto overflow-scroll">
                    <TabsTrigger value="all" className={`w-[100px] rounded-2xl ${activetab === "all" ? " !bg-amber-100" : ""} `}>
                        همه
                    </TabsTrigger>
                </TabsList>
                <TabsContent value="all">
                    <h1>
                        Test
                    </h1>
                </TabsContent>
            </Tabs>
        </div>
        </>
    )
}
