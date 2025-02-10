import { Input } from "@/components/ui/input"
import { Button } from "../ui/button"
import Eye from "../icons/Eye"
const InputC = ({text , placeholder , onChange , value , type}) => {
    return (
    <>
        <h3 className="text-right p-[10px]">
            {text}
        </h3>
        {
            type === "password" ? 
            <div className="w-[100%] relative">
                <Button className="absolute rounded-l-full left-[0px] bg-amber-500">
                    <Eye/>
                </Button>
                <Input type={type} className="text-right rounded-full outline-hidden " placeholder={placeholder} onChange={onChange} value={value} />
            </div>
             :<Input type={type} className="text-right rounded-full outline-hidden" placeholder={placeholder} onChange={onChange} value={value} />
        }
        
    </>
    )
}
export default InputC