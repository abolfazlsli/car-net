'use client'
import { GetActivty } from "@/app/apiHandler/apis"
import { token } from "@/app/redusers/data"
import GreenCheck from "@/components/icons/Done"
import RedWrong from "@/components/icons/Wrong"
import { ScrollArea } from "@/components/ui/scroll-area"

import { useEffect, useState } from "react"

const UserActivity = () => {
    const [pagedata ,setPageData] = useState([])
    useEffect(() => {
        let data={
            token : token
        }
        GetActivty(data).then(
            res => {
                setPageData(res.data.apidata)
            }
        )
    } , [])
    return (
        <>
        <ScrollArea className="w-[100%] h-[400px]">
            {
                pagedata.map(
                    (event , index) => (
                        
                            <div className="w-[100%] rounded-xl shadow-md p-[15px] mt-[10px] flex justify-between">
                                <h1 key={index}>
                                    {event.action}
                                </h1>
                                <h1>
                                    {event.date}
                                </h1>
                                <h1>
                                    {event.status === "done" ? <GreenCheck className="w-[25px] h-[25px]"/> : <RedWrong className="w-[25px] h-[25px]" />}
                                </h1>
                            </div>
                    )
                )
            }
            </ScrollArea>
        </>
    )
}
export default UserActivity