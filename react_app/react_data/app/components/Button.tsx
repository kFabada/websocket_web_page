import React from "react";
import "../style/Button.css"

interface ButtonType {
    title:string,
    handleConfirm:any   
}

export default function Button({title, handleConfirm} :ButtonType){
    return(
         <button name="btn" className="button button_active button_active_pointer" type={"button"} onClick={handleConfirm}>{title}</button>    
    );
}