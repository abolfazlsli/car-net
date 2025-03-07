
import { Button } from "@/components/ui/button"
import InputC from "../input-c"

const Seciurty = () => {
    return (
        <>
        <h1 className="text-right text-[25px]">
            تغییر رمزعبور
        </h1>
        <div className="w-[100%] flex justify-center">
            <div className="w-[50%]">
                <InputC type="password"  placeholder = "رمز عبور قبلی"  />
                <br/>
                <InputC  type="password" placeholder = "رمز عبور قبلی"  />
                <br/>
                <InputC  type="password" placeholder = "رمز عبور قبلی"  />
                <div className="m-[5px] w-[100%] md:w-[100%]">
                    <Button className="bg-amber-500 w-[100%] rounded-full mt-[20px]" >
                        ثبت
                    </Button>
                </div>
            </div>
        </div>

        </>
    )
}
export default Seciurty