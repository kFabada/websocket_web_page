import React, { useContext, useState, useRef, useEffect } from "react";
import Button from "~/components/Button";
import Loading from "~/components/Loading";
import { AuthContext } from "~/context/login/AuthContext";
import "../style/Login.css"

export default function Login(){
    const initialValue = {
        username: '',
        password: ''
    }
    const {message, setMessage, loading, setLoading, activeMess, setActiveMess} = useContext(AuthContext);
    const [formData, setFormData] = useState({
        username: '',
        password: '',
        checkbox: false
    });
    const [checkbox, setCheckbox] = useState(false);
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

   

    async function validPayload(formData:any){
        setLoading(!loading)
    }

    return(
        <section className="container">
           
                <form ref={form} className="form" onClick={(e) => e.preventDefault()}>
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
                        <input className="form_item_input"  type="text" id="password" name="password" value={formData.password} onChange={(e) => setFormData({
                            ...formData,
                            password:e.target.value
                        })}/>    
                    </div>
                     <div className="form_item">
                                <label style={{color: "white"}} htmlFor="check">Salva Login</label>
                                <input id="check" name="check" type="checkbox" checked={formData.checkbox}  onChange={e => setCheckbox(!formData.checkbox)} />
                            </div> 
                    { !loading ?
                        <div className="button_group">
                           
                            <div>
                                <Button title={"Login"} handleConfirm={() => validPayload(formData)} handleDisabled={loading}  />
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