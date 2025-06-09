import type { Cadastro } from "@/app/create_account/page/CreateAccount";
import { APIURL } from "./ApiURL";
import { header } from "./ApiURL";
import type { ResponseMessage } from "@/app/model/ApiMessage";

export async function ApiCreatAccount(formCadastro: Cadastro): Promise<ResponseMessage|any> {
    try{
        const result = await fetch(`${APIURL}api/login`, {
            method: "POST",
            body: JSON.stringify(formCadastro),
            headers: header
        });
        const data = result.json();
        return data;
        
    }catch(erros){
        console.log("error:" + erros);
    }
   
} 