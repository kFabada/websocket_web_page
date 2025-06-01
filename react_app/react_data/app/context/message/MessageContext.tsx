import React, { createContext, useState, type Dispatch, type ReactNode, type SetStateAction } from "react";

interface Message {
    message:string,
    setMessage: Dispatch<SetStateAction<string>>
    messageActive:boolean
    setMessageActive: Dispatch<SetStateAction<boolean>>
}


export const MessageContext = createContext<Message>({
    message: '',
    setMessage: () => {},
    messageActive: false,
    setMessageActive: () => {}
})


export default function MessageContextProviders({children}: {children:ReactNode}){

    const [message, setMessage] = useState('');
    const [messageActive, setMessageActive] = useState(false);

    return (
        <MessageContext.Provider value={{message, setMessage, messageActive, setMessageActive}} >
            {children}
        </MessageContext.Provider>
    )
}