import type { Route } from "./+types/Home";
import Login from "../pages/login/Login";
import AuthContextProviders from "~/context/login/AuthContext";


export function meta({}: Route.MetaArgs) {
  return [
    { title: "Login" },
    { name: "Login", content: "Login" },
  ];
}

export default function Home() {
  return (
      <AuthContextProviders>
          <Login />
      </AuthContextProviders>         
   
  ) ;
}
