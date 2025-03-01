import InputC from "@/components/custom/input-c";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function Page() {
    return (
        <>
            <div className="w-[100%] flex justify-center bg-gray-100 pb-[15px]">
            <div className="w-[30%]">
                    <InputC placeholder="جستوجو" type={"search"}  />
                </div>
            </div>
            <div className="w-[100%] flex justify-center pl-[30px]">
                <div className="w-[75%] h-[75vh] ring-2 ring-[#e8e8e8] rounded-3xl mt-[15px]">
                    <ScrollArea >

                    </ScrollArea>
                </div>
                <div className="w-[25%]">
                    <div className="w-[90%] rounded-3xl ring-2 ring-[#e8e8e8] h-[36.5vh] mt-[15px] ml-[15px]">

                    </div>
                    <div className="w-[90%] rounded-3xl ring-2 ring-[#e8e8e8] h-[36.5vh] mt-[15px] ml-[15px]">

                    </div>
                </div>
            </div>
        </>
    )
}