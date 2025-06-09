'use client'

import React, { useContext, useState, useRef, useEffect } from "react";
import Button from "@/app/components/Button";
import Loading from "@/app/components/Loading";
import { AuthContext } from "@/app/context/login/AuthContext";
import show from "@/../public/showpass.png"
import hide from "@/../public/hidepass.png"
import "@/app/style/Form.css"
import CreateAccount from "@/app/create_account/page/CreateAccount";
import { LoadingContext } from "@/app/context/loading/LoadingContext";
import { MessageContext } from "@/app/context/message/MessageContext";
import Image from 'next/image'

export default function Login(){
    const {} = useContext(AuthContext);
    const {loading, setLoading} = useContext(LoadingContext);
    const {message, messageActive, setMessage, setMessageActive} = useContext(MessageContext);
    
    const [showPassword, setShowPassword] = useState(false);
    const [openModal, setOpenModal] = useState(false);
    const [formData, setFormData] = useState({
        username: '',
        password: '',
        checkbox: false
    });
    const form = useRef<HTMLFormElement>(null);

    useEffect(() => {
        const inputs = form.current?.getElementsByClassName("form_item_input");
        if(!inputs)return
        
        for(let i = 0; i < inputs.length; i++){
            const input = inputs[i] as HTMLInputElement;
            if(input.value === ""){
                input.style.borderColor = "red";
                
            }else{
                input.style.borderColor = "green";
            }
        }
        
    },[formData]);

    useEffect(() => {
        cleanInputs();
    },[])

    async function validPayload(){
        setLoading(!loading)
    }

    function cleanInputs(){
        setFormData({...formData, username: '', password: ''}); 
    }

    function openModalCreateAccount():void{
        setOpenModal(true);
    }

    function closeModalCreateAccount():void{
        setOpenModal(false); 
    }

    if(openModal) return <CreateAccount openModal={openModal} closeModal={() => closeModalCreateAccount()}/>

    return(
        <section className="container">
                <form ref={form} className="form" onSubmit={(e) => e.preventDefault()}>
                    <div className="form_title">
                        <h1 className="form_item_title">WebSocket</h1>
                    </div>
                    <div className="form_item">
                        <label className="form_item_label" htmlFor="username">Username</label>
                        <input className="form_item_input" type="text" id="username" name="username" value={formData.username} onChange={(e) => setFormData({
                            ...formData,
                            username:e.target.value
                        })}/>
                    </div>
                    <div className="form_item">
                        <label className="form_item_label" htmlFor="password">Password</label>
                        <div style={{position:"relative"}}>
                            <input className="form_item_input"  type={!showPassword ? "password" : "text"} id="password" name="password" value={formData.password} onChange={(e) => setFormData({
                                ...formData,
                                password:e.target.value
                            })}/>
                            <Image alt="show_password" height={25} width={25} onClick={() => setShowPassword(!showPassword)} style={{position: "absolute", right:"7px", bottom: "15px"}} src={!showPassword ? hide : show } />                   
                        </div>    
                    </div>
                    <div className="form_item">
                        <div>
                            <label style={{color: "white", fontSize: "14px", fontFamily: "sans-serif"}} htmlFor="check">lembra senha</label>
                            <input id="check" name="check" type="checkbox" checked={formData.checkbox}  onChange={(e) => setFormData({...formData, checkbox:e.target.checked})} />
                        </div>  
                    </div> 
                    { !loading ?
                        <div className="button_group">
                            <div>
                                <Button title={"Login"} type="submit" handleConfirm={() => validPayload()} />
                            </div>
                            <div>
                                <Button title={"Create Account"} type="button" handleConfirm={() => openModalCreateAccount()}/>
                            </div>
                        </div>
                        :
                        <Loading/>
                    } 
                    {messageActive &&
                        <span className="message">{message}</span>
                    }
                </form>      
        </section>
     );   
}