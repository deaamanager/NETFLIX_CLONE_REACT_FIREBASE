import React, { useState, useEffect, useRef } from 'react';
import { google, auth } from "../firebase";
import { signInWithRedirect } from "@firebase/auth";
import { logout, login } from '../features/userSlice';
import { Typewriter, Cursor } from 'react-simple-typewriter';
import './SingInscreen.css'
function SingIn() {
  const [errorMessage, setErrorMessage] = useState("");
  const [value, setValue] = useState('');
  const emailref = useRef(null);
  const passwordref = useRef(null);

  const handelGoogle = () => {
    signInWithRedirect(auth, google).then((authUser) => {
      if (authUser) {
        login()
      } else {
        logout()
      }
    })
  }

  useEffect(() => {
    setValue(localStorage.getItem("email"))
  })

  const register = (e) => {
    e.preventDefault();

    auth.createUserWithEmailAndPassword(
      emailref.current.value,
      passwordref.current.value
    ).then((authUser) => {
    }
    ).catch((error) => {
      setErrorMessage(error.message);
    });
  };

  return (


    <form>
      <h1><span><Typewriter delaySpeed={900} loop={true} words={["Sing Up . . ."]} /></span>
        <span><Cursor /> </span>
      </h1>
      <input
        ref={emailref}
        type="email" placeholder="Email" />
      <input
        ref={emailref}
        placeholder="Config EMAIL" />
      <input
        ref={passwordref}
        type="password" placeholder="Password" />
      {errorMessage && <div className="singin__error">
        <h1 className='error__title'>plase register with your email</h1>
        <p className='error__message'>reg</p>
        <button className='error__button'
          onClick={() => setErrorMessage("")}
        >Close</button>
      </div>}

      <button
        type="submit"
        onClick={register}
      >Sign up</button>
         <div className='div__googlebtn'>
         <button
       onClick={handelGoogle}
       className='google__button'
     >
       LogIn with
     </button>
      <img
       className='google__logo'
       src='https://www.pngplay.com/wp-content/uploads/13/Google-Logo-PNG-HD-Quality.png'
       alt='google-login-logo' />
     </div>
    </form>
 
  )
}

export default SingIn;