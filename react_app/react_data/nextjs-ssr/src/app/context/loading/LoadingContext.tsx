'use client'
import React, { createContext, useContext, useState, type Dispatch, type ReactNode, type SetStateAction } from "react";

interface Loading{
    loading:boolean
    setLoading:Dispatch<SetStateAction<boolean>>
}

export const LoadingContext = createContext<Loading>({
    loading: false,
    setLoading: () => { }
})

export default function LoadingContextProviders({children}: {children: ReactNode}){
    const [loading, setLoading] = useState(false);

    return(
        <LoadingContext.Provider value={{loading, setLoading}}>
            {children}
        </LoadingContext.Provider>
    )
}