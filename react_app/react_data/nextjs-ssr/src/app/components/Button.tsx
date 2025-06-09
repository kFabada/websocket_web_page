import React from "react";
import "@/app/style/Button.css"

interface ButtonType {
    title:string,
    handleConfirm:any   
    type: "submit"|"button"|"reset"
}

export default function Button({title, handleConfirm,type} :ButtonType){
    return(
         <button name="btn" className="button button_active button_active_pointer" type={type} onClick={handleConfirm}>{title}</button>    
    );
}