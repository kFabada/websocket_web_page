'use client'

import React, { useContext, useEffect, useState } from "react";
import "@/app/style/Form.css"
import Loading from "@/app/components/Loading";
import Button from "@/app/components/Button";
import StateSelect from "@/app/components/StateSelect";
import { city } from "@/app/comum/CityData";
import { state } from "@/app/comum/StateData";
import { LoadingContext } from "@/app/context/loading/LoadingContext";
import { MessageContext } from "@/app/context/message/MessageContext";
import {ApiCreatAccount} from "@/app/store/ApiCreatAccountRepository";

export interface Cadastro {
    name: string
    cpf: string,
    date: string,
    adress: string,
    cep: string,
    city: string,
    state: string
    username: string,
    password: string
    email: string
}

interface Props {
    openModal: boolean
    closeModal(): void
}

export default function CreateAccount({ openModal, closeModal }: Props) {
    const [formCadastro, setFormCadastro] = useState<Cadastro>({
        name: '',
        cpf: '',
        cep: '',
        city: '',
        date: '',
        adress: '',
        state: '',
        username: '',
        password: '',
        email: ''
    });
    const {loading, setLoading} = useContext(LoadingContext);
    const {message, messageActive, setMessage, setMessageActive} = useContext(MessageContext);

    useEffect(() => {
        console.log(formCadastro)
    },[formCadastro])

    async function cadastro(): Promise<void> {
        try{
            setLoading(true);
            const data = await ApiCreatAccount(formCadastro);   
            setLoading(false);
            console.log("dados", data);
            console.log("status", data.status);

            setMessageActive(true);
            setMessage(data.message);
            
            // if(data.status === 200 || data.status === 422 || data.status === 201){
                
            //     setMessageActive(true);
            //     setMessage(data.data.message);
            // }
            // if(data.status === 422){
            //     setMessageActive(true);
            //     setMessage(data.data.message);
            // }
            // if(data.status === 500){
            //     setMessageActive(true);
            //     setMessage("Aconteceu Alguma coisa com o Cadastro");
            //     throw new Error(data.data.message);
            // }
        }catch(err){
            console.error("erro" + err);
            setLoading(false);
        }
      
    }
    return (
        <section style={!openModal ? { display: "none" } : { display: "flex" }} className="container">
            <form className="form" onSubmit={(e) => e.preventDefault()}>
                <div style={{ position: "relative" }}>
                    <span onClick={() => {
                        closeModal()
                        setLoading(false)
                    }
                    } style={{ color: "red", fontSize: "30px", position: "absolute", left: "230px", cursor: "pointer" }}>X</span>
                </div>
                <div>
                    <h1 className="form_item_title">Cadastro</h1>
                </div>
                <div className="form_item">
                    <label className="form_item_label" htmlFor="cpf">CPF</label>
                    <input className="form_item_input" type="text" id="cpf" name="cpf" onChange={(e) => setFormCadastro({ ...formCadastro, cpf: e.target.value })} />
                </div>
                <div className="form_item">
                    <label className="form_item_label" htmlFor="date">Data Nascimento</label>
                    <input className="form_item_input" type="date" id="date" name="date" onChange={(e) => setFormCadastro({ ...formCadastro, date: e.target.value })} />
                </div>
                <div className="form_item">
                    <label className="form_item_label" htmlFor="endereco">Endereço</label>
                    <input className="form_item_input" type="text" id="endereco" name="endereco" onChange={(e) => setFormCadastro({ ...formCadastro, adress: e.target.value })} />
                </div>
                <div className="form_item">
                    <label className="form_item_label" htmlFor="cep">CEP</label>
                    <input className="form_item_input" type="text" name="cep" id="cep" onChange={(e) => setFormCadastro({ ...formCadastro, cep: e.target.value })} />
                </div>
                <div className="form_item">
                    {/* <label className="form_item_label" htmlFor="cidade">Cidade</label>
                    <input className="form_item_input" type="text" name="cidade" id="cidade" onChange={(e) => setFormCadastro({ ...formCadastro, city: e.target.value })} /> */}
                    <label className="form_item_label" htmlFor="estado">Estado</label>
                    <StateSelect formData={formCadastro} setFormData={setFormCadastro} object={"city"} item={city} optionNullValue="Escolha sua Cidade"/>
                </div>
                <div className="form_item">
                      <label className="form_item_label" htmlFor="estado">Estado</label>
                      <StateSelect formData={formCadastro} setFormData={setFormCadastro} object={"state"} item={state} optionNullValue="Escolha um Estado"/>
                </div>
                {/* <div className="form_item">
                    <label className="form_item_label" htmlFor="estado">Estado</label>
                    <input className="form_item_input" type="text" name="estado" id="estado" onChange={(e) => setFormCadastro({ ...formCadastro, state: e.target.value })} />
                </div> */}
                 <div className="form_item">
                    <label className="form_item_label" htmlFor="name">Nome</label>
                    <input className="form_item_input" type="text" id="name" name="name" onChange={(e) => setFormCadastro({ ...formCadastro, name: e.target.value })} />
                </div>
                <div className="form_item">
                    <label className="form_item_label" htmlFor="username">Login</label>
                    <input className="form_item_input" type="text" id="username" name="username" onChange={(e) => setFormCadastro({ ...formCadastro, username: e.target.value })} />
                </div>
                <div className="form_item">
                    <label className="form_item_label" htmlFor="password">Senha</label>
                    <input className="form_item_input" type="password" id="password" name="password" onChange={(e) => setFormCadastro({ ...formCadastro, password: e.target.value })} />
                </div>
                 <div className="form_item">
                    <label className="form_item_label" htmlFor="email">Email</label>
                    <input className="form_item_input" type="email" id="email" name="email" onChange={(e) => {setFormCadastro({...formCadastro, email: e.target.value})}} />
                </div>
                {!loading ?
                    <div className="button_group">
                        <Button type="submit" title="Cadastro" handleConfirm={() => cadastro()} />
                    </div>
                    :
                    <Loading />
                }
                {messageActive && message != '' &&
                    <div className="message">
                        <span className="message_text">{message}</span>
                    </div>
                }
            </form>
        </section>
    );
}