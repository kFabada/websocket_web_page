"use client"
import React,{createContext, useState, type Dispatch, type ReactNode, type SetStateAction} from "react";
import type { Login } from "@/app/model/Login";

interface Props  {
    dataUsuario:Login,
    getLogin():Promise<Login>,
    setDataUsuario:Dispatch<SetStateAction<Login>>,
    // activeMess:boolean,
    // setActiveMess:Dispatch<SetStateAction<boolean>>,
    // message:string, 
    // setMessage:Dispatch<SetStateAction<string>>, 
    // loading:boolean, 
    // setLoading:Dispatch<SetStateAction<boolean>>
}

export const AuthContext = createContext<Props>(
     {
        dataUsuario: {
            id: '',
            token: '',
            username: ''
        },
        getLogin: () => {
            throw new Error("");
        },
        setDataUsuario: () => {
            throw new Error("");
        },
        // message: '', 
        // setMessage: () => {}, 
        // loading:false, 
        // setLoading: () => {}, 
        // activeMess: false, 
        // setActiveMess: () => {}
    });


export default function AuthContextProviders({children}: {children:ReactNode}){
     const [dataUsuario, setDataUsuario] = useState<Login>({
            id: '',
            token: '',
            username: ''
        });
    //   const [message, setMessage] = useState('');
    //   const [loading, setLoading] = useState(false);
    //   const [activeMess, setActiveMess] = useState(false);

     async function getLogin():Promise<Login>{
        throw new Error("")
      }
      
      return(
        <AuthContext.Provider value={
            {
            dataUsuario, 
            setDataUsuario,
            getLogin
            }}>
                            {children}
            </AuthContext.Provider>
      );
}   
