import React,{useState} from "react";
import LoginImage from "../../images/user-verificafety-measures_335657-3530.png"

import 'react-toastify/dist/ReactToastify.css';
import {  Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

function LoginPage() {
    const navigate = useNavigate();


    const [email,updateEmail]=useState()

const [data,setdata]=useState("")

const fun=()=>{
    setdata(email)
}

React.useEffect(()=>{
fun();
})


const setEmail=(e)=>{
    updateEmail(e.target.value)
    updateEmail({
        ...email,
        [e.target.name]:e.target.value})
}
// const setPassword=(e)=>{
//     updatePassword(e.target.value)
//     updatePassword({[e.target.name]:e.target.value})
// }


    const Login = (e) => {
        // email="n@gmail.com"
        // if(email==true){
        //     toast.success("your id has been sucessfully login.....")
        // } else 
        // if(email==false){
        //     toast.error("incorrct username...")
        // } else{
        //     setTimeout(() => {
        //         navigate("/home",{state:{data:data}})
        //     }, 2000);
        // }
            setTimeout(() => {
                navigate("/home", { state:{data:data}});
            }, 3000);
            toast.success("welcome....")
    }



     const Register=()=>{
        toast.error("You are not elligble")
     }
     


     const Formsubmit= async(e)=>{
        e.preventDefault()
        const response= await fetch('http://localhost:8080/mypath',{
            method:'POST',
            body:JSON.stringify(email),
           
            headers:{
                'Content-Type':'application/json'
            }
        })
        
     const getdata= await response.json();
         console.log(getdata)
       
     }

    return (
        <>
            <section id="form">
           
                <div class="container">
               
                    <div class="Main-dataform">
                        
                    <ToastContainer position="top-center" />
                        <div class="form-imageText">
                            <h2>Login....</h2> 
                            <img
                                src={LoginImage}
                                alt="formimage"
                            />
                            
                        </div>
                        <form onSubmit={Formsubmit}>
                        <div class="Form-data">
                            <input required
                            onChange={setEmail}
                                id="email"
                                class="app-form-control"
                                placeholder="Enter your email"
                                type="text"
                              name="email"
                            />
                            <br />

                            <input
                            onChange={setEmail}
                                id="password"
                                class="app-form-control"
                                placeholder="password"
                                type="text"
                                name="password"
                                
                            />
                            
                            <div class="btn-btn">
                                <button onClick={Login} type="submit" class="btn">Login</button>
                              <Link to="/signup">  <button onClick={Register} class="btn2">Signup</button></Link>
                            </div>
                        </div>
                        </form>
                    </div>
                </div>
            </section>


        </>
    )
}

export { LoginPage }