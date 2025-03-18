'use client'
import Person from "@/components/icons/Person"
import ShopIcon from "@/components/icons/Shop"
import { Button } from "@/components/ui/button"
import { defaultBg } from "./assets/Union.png"
import Image from "next/image"
import PenC  from "@/components/icons/pen"
import { useSelector } from "react-redux"
import { Suspense } from "react"
import Link from "next/link"
const HeaderD = () => {
    const userinfo = useSelector((state) => state.userinfo)
    return (
        <>
            <div className={"w-[100%] relative bg-[white] h-[150px] p-[10px] defaulbg"}>
                <div className="flex">
                    <Link href="/dashboard/addshop">
                        <Button className="rounded-full w-[50px] h-[50px] flex justify-center items-center bg-amber-500 m-[10px]">
                            <ShopIcon className='w-[30px] h-[30px]'/>
                        </Button>
                    </Link>
                    <Button className="rounded-full w-[50px] h-[50px] flex justify-center items-center bg-amber-500 m-[10px]">
                        <PenC className='w-[30px] h-[30px]' />
                    </Button>
                </div> 
                <Suspense fallback={<p>Loading...</p>}>
                <div className="absolute right-[5px] md:top-5  md:right-10 flex justify-start items-center">
                    <div className="pr-[15px]  md:pr-[30px] flex flex-col justify-start items-end">
                        <h1 className=" text-[15px] md:text-[20px]">
                           سلام {userinfo.name}
                        </h1>
                        {
                            userinfo.bio ? <p className="text-gray-400">{userinfo.bio}</p> :<p className="text-gray-400">...یه بیوگرافی بزار</p>
                        }
                        
                    </div>
                    <div className="rounded-full bg-white  shadow-md border-[5px] border-[#f8e5a0]">
                        <Person className=" w-[100px] h-[100px] md:w-[150px] md:h-[150px] text-[#f8e5a0]"/>
                    </div>
                    
                </div>
                </Suspense>
            </div>
        </>
    )
}

export default HeaderD