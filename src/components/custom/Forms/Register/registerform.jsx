"use client"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import "../../../../app/fonts/style.css"

import InputC from "../../input-c";
import { DialogClose } from "@radix-ui/react-dialog";


const RegisterForm = () => {
    return (
    <Dialog open={true}>
    <DialogContent>
      <DialogHeader>
        <DialogTitle>
           
            <h1 className="text-center">ثبت نام</h1>
        </DialogTitle>
        <DialogDescription>
           <InputC type={"text"} placeholder={"شماره تلفن یا نام کاربری"} text={"شماره تلفن"}/>
           <InputC type={"passowrd"} placeholder={"رمزعبور"} text={"رمز"}/>
           <div className="flex items-center space-x-2 justify-end p-[10px]">
           <div className="grid gap-1.5 leading-none">
                <label
                        htmlFor="terms"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-right"
                    >
                        مرا به خاطر بسپار
                    </label>
                    <p className="text-[10px] text-muted-foreground">
                        فعال سازی این گزینه شمارا از لاگین مجدد تا یک ماه بی نیاز میکند
                    </p>
            </div>
            <Checkbox id="terms" />
            </div>
            <Button className="bg-amber-500 w-[100%] rounded-full mt-[10px]">
                ورود
            </Button>
            <p className="mt-[10px]">
                حساب ندارید ؟ <Link href={"/register"} className="text-amber-500 cursor-pointer">
                    ساخت حساب
                </Link>
            </p>
        </DialogDescription>
      </DialogHeader>
    </DialogContent>
  </Dialog>
    )
}
export default RegisterForm