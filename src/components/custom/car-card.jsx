import { apiurl } from "@/app/apiHandler/network"
import { useEffect } from "react"
import { useSelector } from "react-redux"


export const CarCard = ({data}) => {
    return (
        <> 
            <div className="w-[230px] h-[330px] rounded-xl m-[10px] flex justify-center items-center ring-2 ring-gray-200 flex-col p-[10px]">
                <div className="h-[40%] w-[100%] overflow-hidden">
                    <img src={`${apiurl}/files/${data.cover[0]}`} className="rounded-md object-cover" />
                </div>
                <div className="h-[60%]">
                    <h1 className="font-bold text-xl">
                        {data.title}
                    </h1>
                </div>
            </div>
        </>
    )

}