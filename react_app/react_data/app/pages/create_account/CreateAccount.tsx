import React, { useEffect, useState } from "react";
import "./style/CreateAccount.css"
import "~/style/Form.css"
import Loading from "~/components/Loading";
import Button from "~/components/Button";

interface Cadastro {
    cpf:string,
    data:string,
    endereco:string,
    cep:string,
    cidade:string,
    estado:string
    login:string,
    password:string
}

interface Props {
    openModal:boolean
    closeModal():void 
}

export default function CreateAccount({openModal, closeModal}:Props){
    const [formCadastro, setFormCadastro] = useState<Cadastro>({
        cpf: '',
        cep: '',
        cidade: '',
        data: '',
        endereco: '',
        estado: '',
        login: '',
        password: ''
    });
    const [loading, setLoading] = useState(false);
    
    async function cadastro(){
        setLoading(true);
    }

    return(
        <section style={!openModal ? {display:"none"} : {display:"flex"}} className="container">
            <form className="form" onSubmit={(e) => e.preventDefault()}>
                <div style={{position: "relative"}}>
                    <span onClick={() => 
                        {
                            closeModal()
                            setLoading(false)
                        }
                    } style={{color: "red", fontSize:"30px", position: "absolute", left: "230px", cursor: "pointer"}}>X</span>
                </div>
                <div>
                    <h1 className="form_item_title">Cadastro</h1>
                </div>
                <div className="form_item">
                    <label className="form_item_label" htmlFor="cpf">CPF</label>
                    <input className="form_item_input" type="text" id="cpf" name="cpf" onChange={(e) => setFormCadastro({...formCadastro, cpf: e.target.value})} />
                </div>
                <div className="form_item">
                    <label className="form_item_label" htmlFor="date">Data Nascimento</label>
                    <input className="form_item_input" type="date" id="date" name="date" onChange={(e) => setFormCadastro({...formCadastro, data: e.target.value})}/>
                </div>
                <div className="form_item">
                    <label className="form_item_label" htmlFor="endereco">Endereço</label>
                    <input className="form_item_input" type="text" id="endereco" name="endereco" onChange={(e) => setFormCadastro({...formCadastro, endereco: e.target.value})} />
                </div>
                  <div className="form_item">
                    <label className="form_item_label" htmlFor="cep">CEP</label>
                    <input className="form_item_input" type="text" name="cep" id="cep" onChange={(e) => setFormCadastro({...formCadastro, cep: e.target.value})} />
                </div>
                  <div className="form_item">
                    <label className="form_item_label" htmlFor="cidade">Cidade</label>
                    <input className="form_item_input" type="text" name="cidade" id="cidade" onChange={(e) => setFormCadastro({...formCadastro, cidade: e.target.value})}/>
                </div>
                  <div className="form_item">
                    <label className="form_item_label" htmlFor="estado">Estado</label>
                    <input className="form_item_input" type="text" name="estado" id="estado" onChange={(e) => setFormCadastro({...formCadastro, estado: e.target.value})} />
                </div>
                  <div className="form_item">
                    <label className="form_item_label" htmlFor="login">Login</label>
                    <input className="form_item_input" type="text" id="login" name="login" onChange={(e) => setFormCadastro({...formCadastro, login: e.target.value})} />
                </div>
                  <div className="form_item">
                    <label className="form_item_label" htmlFor="senha">Senha</label>
                    <input className="form_item_input" type="password" id="senha" name="senha"  onChange={(e) => setFormCadastro({...formCadastro, password: e.target.value})}/>
                </div>
                {!loading ?
                <div className="button_group">
                     <Button title="Cadastro" handleConfirm={() => cadastro()} />
                </div>                    
                :
                 <Loading/>
                }
            </form>            
        </section>
    );
}