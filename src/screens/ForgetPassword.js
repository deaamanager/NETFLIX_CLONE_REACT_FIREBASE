import React, { useState, useRef } from 'react'
import { auth } from '../firebase';
import './SingInscreen.css'
function ForgetPassword() {
    const [message,setMessage] = useState("");
    const emailref = useRef();
    const [errorMessage, setErrorMessage] = useState("");
    const forgetpasswordHandler= (e) => {
        e.preventDefault();
        auth.sendPasswordResetEmail(
          emailref.current.value,
          setMessage("Got it from your Email")
        ).then(()=>{
          emailref.current.value = ""
          //console.log("ready");
        }).catch((error) => {
          setErrorMessage(error.message);
        });
      } 

  return (
    <div >
       <form className='div__forget'>
       <input ref={emailref} placeholder='Email' type='email' className='input__forget'  />
       <button className='button__forget' onClick={forgetpasswordHandler} >
        Set your Emai
        </button> 
       </form>
       {errorMessage ? (<p className='erro__forget'>  {errorMessage} </p>) : (<p className='corr__forget'> {message} </p>) }
    
    </div>
  )
}

export default ForgetPassword;