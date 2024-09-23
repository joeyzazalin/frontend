import React, { useState } from 'react'
import './Css/LoginSignup.css'

const LoginSignup = () => {

    const [state, setState] = useState("Login");
    const [formData, setFormData] = useState({
      username: "",
      password: "",
      email: ""
    })

    const changeHandler = (e) => {
      setFormData({...formData,[e.target.name]:e.target.value})
    }

    const login = async () =>{
      console.log("Login Function Executed",formData);
    }

    const signup = async () =>{
      console.log("Signup Function Executed",formData);
      let responseData;
      const response = await fetch('http://localhost:4000/sign', {
        method:'POST',
        headers:{
          accept:'application/json',
          'content-type':'application/json'
        },
        body: JSON.stringify(formData),
        });
        responseData = await response.json();

      if(responseData.success){
        localStorage.setItem('auth-token',responseData.token);
        window.location.replace("/");
      }
      else{
        alert(responseData.errors)
      }
      
    }
  return (
  <div className='loginsignup'>
    <div className="loginsignup-container">
      <h1>{state}</h1>
      <div className="loginsignup-fields">
        {state === "Sign Up" ? <input name='username' value={formData.username} onChange={changeHandler} type="text" placeholder='Your Name' /> : <></>}
        <input name='email' value={formData.email} onChange={changeHandler} type="Email" placeholder='Email Address'/>
        <input name='password' value={formData.password} onChange={changeHandler} type="Password" placeholder='Password'/>
      </div>
      <button onClick={()=>{state==="Login"?login():signup()}}>Continue</button>
      {state==="Sign Up"
      ?<p className='loginsignup-login'>Already have an account? <span onClick={()=>{setState("Login")}}>Login here</span></p>
      : <p className='loginsignup-login'>Create an Account? <span onClick={()=>{setState("Sign Up")}}>click here</span></p>}
      <div className="loginsignup-agree">
        <input type="checkbox" name='' id=''/>
        <p>By continuing, i agree to the terms of use & private policy.</p>
      </div>
    </div>

  </div>
)
}

export default LoginSignup