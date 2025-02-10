import LoadingIcn from "../icons/LoadingIcon"
import { Button } from "../ui/button"

const ButtonC = ({onClick , text , load}) => {
    return (
        <>
        <Button className="bg-amber-500 w-[100%] rounded-full mt-[10px]" onClick = {onClick}>
            {load ? <><LoadingIcn/></> : text}
        </Button>
        </>
    )
}

export default ButtonC