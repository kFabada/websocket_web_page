import React from "react";
import "../style/Button.css"

interface ButtonType {
    title:string,
    handleConfirm:any
    handleDisabled:boolean
}

export default function Button({title, handleConfirm,  handleDisabled}:ButtonType){
    return(
         <button name="btn" className={handleDisabled ?  "button button_disable" :"button button_active button_active_pointer" } type={"button"} onClick={handleConfirm} disabled={handleDisabled}>{title}</button>    
    );
}