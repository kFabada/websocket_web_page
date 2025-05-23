import React, { useContext, useState, useRef, useEffect } from "react";
import Button from "~/components/Button";
import Loading from "~/components/Loading";
import {ApiLogin, loading} from "~/context/login/AuthContext";
import { verifyData } from "~/comum/valid";

export default function Login(){
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });
    const form = useRef(null);
    const [loadingRequest, setloadingRequest] = useContext(loading);

    async function validPayload(formData:any){
        console.log("entrou aqui")
        if(verifyData(formData)){
            setloadingRequest()
        
          
          setTimeout(() => {

          }, 500)

          loadingRequest.loading = false;
        }
        
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
                {!loadingRequest.loading ?
                    <div>
                        <div>
                            <Button title={"Login"} handleConfirm={() => validPayload(formData)} handleDisabled={loadingRequest.loading}  />
                        </div>
                        <div>
                            <Button title={"Create Account"} handleConfirm={null} handleDisabled={loadingRequest.loading}  />
                        </div>
                    </div>
                :
                    <div>
                         <Loading/>
                    </div>
                   
                } 
            </form>
           
        </section>
    );
}