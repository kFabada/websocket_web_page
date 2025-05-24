import type { Route } from "./+types/home";
import Login from "../pages/login/Login";
import AuthContextProviders from "~/context/login/AuthContext";
import React,{useState} from "react";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {



  return (
      <AuthContextProviders>
          <Login />
      </AuthContextProviders>         
   
  ) ;
}
