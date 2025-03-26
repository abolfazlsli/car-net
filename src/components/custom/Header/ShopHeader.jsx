import { deleteFile, editFile, editShopPicData, getFile, getShopData, sendFileShop } from "@/app/apiHandler/apis"
import { apiurl } from "@/app/apiHandler/network"
import AddImage from "@/components/icons/AddImage"
import AddPerson from "@/components/icons/AddPerson"
import { DeleteImage } from "@/components/icons/Delete"
import { EditImageIcon } from "@/components/icons/Edits"
import { Label } from "@radix-ui/react-label"
import { EditIcon } from "lucide-react"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { toast } from "react-toastify"

const ShopHeader = () => {
    const userinfo = useSelector((state) => state.userinfo)
    const [picsdata , setPicsData] = useState(
        {
            profile : null , 
            banner : null , 
        }
    )
    const handelChangePrePic = (data , type) => {
        const file = data.target.files[0]
        const senderdata = {
            token : userinfo.token , 
            newfile : file , 
            oldfile : picsdata[type].split("/")[5]
        }
        console.log(senderdata)
        const profileimage = URL.createObjectURL(file)
        setPicsData({...picsdata , [type] : profileimage})
        editFile(senderdata).then(
            res => {
                console.log(res)
            }
        )
    }
    const deleteHandler = (type) => {
        const senderdata = {
            token : userinfo.token , 
            filename : picsdata[type].split("/")[5],
            type : type
        }
        deleteFile(senderdata).then(
            res => {
                toast.success(
                    "عکس با موفقیت حذف شد"
                )
                setPicsData({...picsdata , [type] : null})
            }
        ).catch(
            err => {
                toast.error(
                    "در حذف عکس خطایی رخ داده "
                )
            }
        )
    }
    const handelShopHeaderData = () => {
        const data = {
            token : userinfo.token
        }
        getShopData(data).then(
            res => {
                console.log(res)
                setPicsData({...picsdata , banner : res.data.apidata.banner?  `${apiurl}/files/read/${res.data.apidata.banner}` : null , profile : res.data.apidata.profilepic?  `${apiurl}/files/read/${res.data.apidata.profilepic}` : null })
            }
        ).catch(
            err => {
                console.log(err)
            }
        )
    }
    const addFileHandler = (e , type) => {
        const file = e.target.files[0]
        const image = URL.createObjectURL(file)
        const senderdata = {
            token : userinfo.token ,
            file : file , 
            dicription : "عکس فروشگاه" ,
            type : type
        }
        editShopPicData({type : type , token : userinfo.token , picname : file.name }).then(res => {
            console.log(res)
        }).catch(
            err => {
                console.log(err)
            }
        )
        sendFileShop(senderdata).then(
            () => {
                setPicsData({...picsdata , [type] : image})
                toast.success("عکس با موفقیت ثبت شد")
            }
        ).catch(
            () => {
                toast.error(
                    "ثبت عکس با خطا مواجه شد "
                )
            }
        )
    }
    useEffect(() => {
        handelShopHeaderData()
    } , [])
    return (
        <>
         <div className="w-[100%] flex relative items-center justify-center">
            <div className="w-[100%] h-[200px] bg-amber-300 flex justify-center items-center rounded-b-xl shadow-md">
                {
                    picsdata.banner ? <>
                        <div className="relative w-[100%]">
                            <Label htmlFor="changebanner">
                                <input type="file" id="changebanner" hidden onChange={e => handelChangePrePic(e , "banner")} />
                                <EditImageIcon className="absolute text-white w-[50px] h-[50px] top-3 left-3 cursor-pointer"/>
                                <img src={picsdata.banner} className="w-[100%] h-[200px] rounded-b-xl object-cover" />
                            </Label>
                            <DeleteImage className="absolute text-white w-[50px] h-[50px] top-3 left-20 cursor-pointer" onClick={() => deleteHandler("banner")} />
                        </div>
                    </> : <>
                    <input type="file" hidden id="addfile" onChange={e => addFileHandler(e , "banner")} />
                    <Label htmlFor="addfile" className="w-[100%] h-[200px] flex justify-center items-center rounded-b-xl cursor-pointer">
                        <AddImage className="w-auto h-[50%] text-white"/>
                            <h1 className="text-2xl text-white ml-[10px]">
                                افزودن عکس بننر
                            </h1>
                    </Label>
                    </>

                }
            
            
            </div>
            <div className="w-[200px] h-[200px] rounded-full ring-2 ring-white bg-amber-300 absolute right-10 top-[80px] flex justify-center items-center" >
                {
                    picsdata.profile ? <>
                        <img src={picsdata.profile} className="w-[100%] h-[100%] rounded-full object-cover" />
                    </> : <>
                        <AddPerson className="w-[50%] h-[50%] fill-white text-white"/>
                    </>
                }
                
            </div>
        </div>
        </>
    )
}

export default ShopHeader