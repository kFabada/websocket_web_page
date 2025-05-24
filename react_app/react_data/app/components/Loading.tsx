import React,{} from "react";
import gifLoading from "../assets/animation/WMDx.gif";
import "~/style/Loading.css"

export default function Loading(){
    return(
        <div className="loading">
            <img className="animation_gif" alt="gifloading" src={gifLoading} />
        </div>
        
    );
}