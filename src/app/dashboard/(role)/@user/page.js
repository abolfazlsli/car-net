'use client'
import Seciurty from "@/components/custom/tabs/Seciurty"
import UserActivity from "@/components/custom/tabs/UserActivity"
import UserInfo from "@/components/custom/tabs/UsersInfoTab"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ScrollArea } from "@radix-ui/react-scroll-area"
import { useState } from "react"
export default function UserPage(){
    const [activetab , setTab] = useState("userinfo")
    console.log(activetab)
    return (
        <> 
        <div className="md:pl-[30px] p-[10px] pt-[80px]">
            <Tabs defaultValue={activetab} onValueChange={setTab}>
                <TabsList className=" w-[100%] md:w-[85%] bg-[white] shadow-md md:overflow-auto overflow-scroll justify-start">
                    <TabsTrigger value = "userinfo" className={`w-[100px] rounded-2xl ${activetab === "userinfo" ? " !bg-amber-100" : ""} `}>
                        <h1>
                            اطلاعات کاربر
                        </h1>
                    </TabsTrigger>
                    <TabsTrigger value="useractivity" className={`w-[100px] rounded-2xl ${activetab === "useractivity" ? " !bg-amber-100" : ""} `}>
                        <h1>
                            فعالیت ها
                        </h1>
                    </TabsTrigger>
                    <TabsTrigger value="saved" className={`w-[100px] rounded-2xl ${activetab === "saved" ? " !bg-amber-100" : ""} `}>
                        <h1>
                            ذخیره شده ها
                        </h1>
                    </TabsTrigger>
                    <TabsTrigger value="history" className={`w-[100px] rounded-2xl ${activetab === "history" ? " !bg-amber-100" : ""} `}>
                        <h1>
                            سابقه
                        </h1>
                    </TabsTrigger>
                    <TabsTrigger value="seciurty" className={`w-[100px] rounded-2xl ${activetab === "seciurty" ? " !bg-amber-100" : ""} `}>
                        <h1>
                            امنیت
                        </h1>
                    </TabsTrigger>
                </TabsList>
                <TabsContent value="userinfo" className=" w-[100%] h-[100%] md:w-[85%] mt-[10px] bg-[white] shadow-xl md:h-[440px] p-[15px] rounded-sm">
                    <UserInfo/>
                </TabsContent>
                <TabsContent className=" w-[100%] h-[100%] md:w-[85%] mt-[10px] bg-[white] shadow-xl md:h-[440px] p-[15px] rounded-sm" value="useractivity">
                    <UserActivity/>
                </TabsContent>
                <TabsContent value="saved" className=" w-[100%] h-[100%] md:w-[85%] mt-[10px] bg-[white] shadow-xl md:h-[440px] p-[15px] rounded-sm">
                        saved
                </TabsContent>
                <TabsContent value="history" className=" w-[100%] h-[100%] md:w-[85%] mt-[10px] bg-[white] shadow-xl md:h-[440px] p-[15px] rounded-sm">
                        history
                </TabsContent>
                <TabsContent value="seciurty" className=" w-[100%] h-[100%] md:w-[85%] mt-[10px] bg-[white] shadow-xl md:h-[440px] p-[15px] rounded-sm">
                    <Seciurty/>
                </TabsContent>
            </Tabs>
           
            </div>
        </>
    )
}