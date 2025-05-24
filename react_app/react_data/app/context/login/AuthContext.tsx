import React,{createContext, useState, type Dispatch, type ReactNode, type SetStateAction} from "react";

type Props = {
    activeMess:boolean,
    setActiveMess:Dispatch<SetStateAction<boolean>>,
    message:string, 
    setMessage:Dispatch<SetStateAction<string>>, 
    loading:boolean, 
    setLoading:Dispatch<SetStateAction<boolean>>
}

export const AuthContext = createContext<Props>(
    {
        message: '', 
        setMessage: () => {}, 
        loading:false, 
        setLoading: () => {}, 
        activeMess: false, 
        setActiveMess: () => {}
    });


export default function AuthContextProviders({children}: {children:ReactNode}){
      const [message, setMessage] = useState('');
      const [loading, setLoading] = useState(false);
      const [activeMess, setActiveMess] = useState(false);

      return(
        <AuthContext.Provider value={
            {
            message, 
            setMessage, 
            loading, 
            setLoading, 
            activeMess, 
            setActiveMess
            }}>
                            {children}
            </AuthContext.Provider>
      );
}   
