'use client'
import InputC from "@/components/custom/input-c";
import { MultiSelect } from "@/components/ui/multi-select";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useEffect, useState } from "react";
import { GetCarsBrands } from "../apiHandler/apis";




export default function Page() {
    const [selectedValues, setSelectedValues] = useState([]);
    const [carModels , setCarModels] = useState([])
    useEffect(
        () => {
            GetCarsBrands().then (
                res => {
                    setCarModels(res.data.apidata)
                }
            )
        } ,[]
    )
    return (
        <>
            <div className="w-[100%] flex justify-between items-center bg-gray-100 p-[25px] flex-col md:flex-row">
            <div className="w-[100%]">
                    <MultiSelect
                        options={carModels}
                        onValueChange={setSelectedValues}
                        defaultValue={selectedValues}
                        placeholder="برند مورد نظرتان"
                        animation={0.3}
                        maxCount={2}
                        variant="default"
                        className="bg-white w-[100%] md:w-[350px] overflow-y-scroll rounded-full" 
                        bagstyle = "!flex-nowrap"
                    />
                </div>
                <div className="w-[100%]  md:w-[30%] mt-[10px] md:mt-[0]">
                        <InputC placeholder="جستوجو" type={"search"}  />
                </div>
            </div>
            <div className="w-[100%] flex justify-center p-[10px] md:pl-[30px]">
                <div className="w-[100%] md:w-[75%] h-[60vh] md:h-[70vh] ring-2 ring-[#e8e8e8] rounded-3xl mt-[15px]">
                    <ScrollArea>

                    </ScrollArea>
                </div>
                {/* filters  */}
                <div className="w-[25%] hidden md:block">
                    <div className="w-[90%] rounded-3xl ring-2 ring-[#e8e8e8] h-[34vh] mt-[15px] ml-[15px]">

                    </div>
                    <div className="w-[90%] rounded-3xl ring-2 ring-[#e8e8e8] h-[34vh] mt-[15px] ml-[15px]">

                    </div>
                </div>
            </div>
        </>
    )
}