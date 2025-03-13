import { Input } from "@/components/ui/input"
import { Button } from "../ui/button"
import Eye from "../icons/Eye"
import { SearchIcon } from "lucide-react"
const InputC = ({text , placeholder , onChange , value , type}) => {
    return (
        <div className="flex flex-col w-[100%]">
            {
                text?.length > 0 ?
                <h3 className="text-right p-[10px]">
                    {text}
                </h3>:<></>
            }
            {
                type === "password" ? 
                <div className="w-[100%] relative">
                    <Button className="absolute rounded-l-full left-[0px] bg-amber-500" title="نمایش رمز عبور">
                        <Eye/>
                    </Button>
                    <Input type={type} className="text-right rounded-full outline-hidden bg-white " placeholder={placeholder} onChange={onChange} value={value} />
                </div>
                : type === "search" ? 
                <>
                    <div className="w-[100%] relative">
                    <Button className="absolute rounded-l-full left-[0px] bg-amber-500" title="جستجو">
                        <SearchIcon/>
                    </Button>
                    <Input type={type} className="text-right rounded-full outline-hidden bg-white" placeholder={placeholder} onChange={onChange} value={value} />
                </div>
                </> :
                <Input type={type} className="text-right rounded-full outline-hidden bg-white" placeholder={placeholder} onChange={onChange} value={value} />
            }
        
    </div>
    )
}
export default InputC