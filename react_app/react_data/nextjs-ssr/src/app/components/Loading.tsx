import React,{} from "react";
import gifLoading from "../assets/animation/WMDx.gif";
import "@/app/style/Loading.css"
import Image from "next/image";

export default function Loading(){
    return(
        <div className="loading">
            <Image className="animation_gif" alt="gifloading" src={gifLoading} />
        </div>
        
    );
}