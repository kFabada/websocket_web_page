import React, { useContext, useState, useRef, useEffect } from "react";
import Button from "~/components/Button";
import Loading from "~/components/Loading";
import { AuthContext } from "~/context/login/AuthContext";
import show from "../../assets/animation/showpass.png"
import hide from "../../assets/animation/hidepass.png"
import "./style/Login.css"

export default function Login(){
    const {message, setMessage, loading, setLoading, activeMess, setActiveMess} = useContext(AuthContext);
    const [cleanInput, setCleanInput] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({
        username: '',
        password: '',
        checkbox: false
    });
    const form = useRef<HTMLFormElement>(null);
    useEffect(() => {
        console.log(formData)
        let inputs = form.current?.getElementsByClassName("form_item_input");
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
        if(!cleanInput){
            setFormData({...formData, username: '', password: ''});
            setCleanInput(true);
        }  
    },[formData])

    async function validPayload(){
        setLoading(!loading)
    }

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
                            <img height={25} width={25} onClick={() => setShowPassword(!showPassword)} style={{position: "absolute", right:"7px", bottom: "15px"}} src={!showPassword ? hide : show }/>                    
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
                                <Button title={"Login"} handleConfirm={() => validPayload()} handleDisabled={loading}  />
                            </div>
                            <div>
                                <Button title={"Create Account"} handleConfirm={null} handleDisabled={loading}  />
                            </div>
                        </div>
                        :
                        <Loading/>
                    } 
                    {message != '' ?
                        <span className="message">{message}</span>
                    :
                    null
                    }
                </form>  
        </section>
    );
}