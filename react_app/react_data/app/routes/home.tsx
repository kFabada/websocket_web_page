import type { Route } from "./+types/home.ts";
import Login from "../pages/login/Login";
import AuthContextProviders from "~/context/login/AuthContext";
import LoadingContextProviders from "~/context/loading/LoadingContext.js";
import MessageContextProviders from "~/context/message/MessageContext.js";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Login" },
    { name: "Login", content: "Login" },
  ];
}

export default function Home() {
  return (
      <AuthContextProviders>
        <LoadingContextProviders>
          <MessageContextProviders>
                  <Login/>
          </MessageContextProviders>
        </LoadingContextProviders>
      </AuthContextProviders>         
   
  ) ;
}
