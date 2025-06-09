import React, {type ReactNode, createContext } from "react";
import type {Usuario} from "@/app/model/Usuario";
import type { Repository } from "@/app/store/UsuarioRepository";

interface UsuarioValid {
  repository:Repository
}

export const GlobalStore = createContext<UsuarioValid>({
    repository: {
         getAuthDados: () => {
            throw new Error ("");
         }
    }
});

function GlobalStoreData({children} : {children:ReactNode}){
    async function getAuthDados():Promise<Usuario>{
       throw new Error("")
    }

    return(
        <GlobalStore.Provider value={{repository: {getAuthDados}  }}>
            {children}
        </GlobalStore.Provider>
    )
}