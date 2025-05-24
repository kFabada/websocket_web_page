import React, { useContext, useState, useRef, useEffect } from "react";
import Button from "~/components/Button";
import Loading from "~/components/Loading";
import { verifyData } from "~/comum/validForm";
import { AuthContext } from "~/context/login/AuthContext";

export default function Login(){
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });
    const form = useRef(null);
    const {message, setMessage, loading, setLoading, activeMess, setActiveMess} = useContext(AuthContext)

 

    async function validPayload(formData:any){
        console.log("entrou aqui")
        setLoading(!loading)

        setTimeout(() => {
            setLoading(false)
        }, 2500)
       
        setMessage('');
        
    }
    return(
        <section>
            <form ref={form} onClick={(e) => e.preventDefault()}>
                <div>
                    <label htmlFor="username">Username</label>
                    <input type="text" id="username" name="username" value={formData.username} onChange={(e) => setFormData({
                        ...formData,
                        username:e.target.value
                    })}/>
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="text" id="password" name="password" value={formData.password} onChange={(e) => setFormData({
                        ...formData,
                        password:e.target.value
                    })}/>    
                </div>
                { !loading ?
                    <div>
                        <div>
                            <Button title={"Login"} handleConfirm={() => validPayload(formData)} handleDisabled={loading}  />
                        </div>
                        <div>
                            <Button title={"Create Account"} handleConfirm={null} handleDisabled={loading}  />
                        </div>
                    </div>
                :
                    <div>
                         <Loading/>
                    </div>
                   
                } 
                {message != '' ?
                
                <div>
                    <p>{message}</p>
                </div>
                :
                <div>
                    <p>Sem mensagem ainda</p>
                </div>
            }
            </form>
           
        </section>
    );
}