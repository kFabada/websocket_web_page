import React,{createContext, useContext} from "react";

interface Data{
    username:string,
    password:string
}

interface FormData{
    payload:Data
}

interface Loading {
    loading:boolean
}

export const loading = createContext<Loading>({
    loading: false 
});

export function ApiLogin({payload}:FormData) {
    console.log(payload)
  
}