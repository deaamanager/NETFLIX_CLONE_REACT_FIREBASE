import React, { useState, useRef } from 'react'
import { auth } from '../firebase';
import './SingInscreen.css'
function ForgetPassword() {
    const [message,setMessage] = useState({isSuccessful: false, msg: ''});
    const emailref = useRef();
    const forgetpasswordHandler= (e) => {
        e.preventDefault();
        auth.sendPasswordResetEmail(
          emailref.current.value,
          setMessage({msg:`✔   Got it from your Email`,isSuccessful:true})
        ).then(()=>{
          emailref.current.value = ""
          //console.log("ready");
        }).catch((error) => {
          
          setMessage({msg:`❗  schreib richtiger eamil`,isSuccessful:false})       
        });
      } 

  return (
    <div className='for__get' >
       <form className='div__forget'>
       <input ref={emailref} placeholder='Email' type='email' className='input__forget'  />
       <button className='button__forget' onClick={forgetpasswordHandler} >
        Enter Email
        </button> 
       </form>
       {message &&  <p style={{color:`${message.isSuccessful ? '#00ff00':'#FF69B4 '}`}}>{message.msg}</p>}
 </div>
  )
}

export default ForgetPassword;