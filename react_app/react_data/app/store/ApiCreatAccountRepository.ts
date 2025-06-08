import type { Message } from "~/context/message/MessageContext";
import type { Cadastro } from "~/pages/create_account/CreateAccount";
import { APIURL } from "./ApiURL";
import { header } from "./ApiURL";

export async function ApiCreatAccount(formCadastro: Cadastro): Promise<Message> {
    const result = await fetch(`${APIURL}api/login`, {
        method: "POST",
        body: JSON.stringify(formCadastro),
        headers: header
    });
    const data = result.json();
    return data;
} 