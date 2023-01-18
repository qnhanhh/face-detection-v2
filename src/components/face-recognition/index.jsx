import {useRecoilValue} from 'recoil'
import { LinkInputState } from "../../states";

const FaceRecognition=()=>{
    const imgUrl=useRecoilValue(LinkInputState)
    return(
        <div className="m-4 w-2/5">
            <img src={imgUrl} alt="" />
        </div>
    )
}

export default FaceRecognition