import React, { useState, useEffect, useRef } from 'react';
import { google, auth  } from "../firebase";
import { signInWithRedirect  } from "@firebase/auth";
import { logout, login } from '../features/userSlice';
import { Typewriter, Cursor } from 'react-simple-typewriter';
import { useDispatch } from 'react-redux';
import './SingInscreen.css'
function SingIn() {
  const [errorMessage, setErrorMessage] = useState("");
  const [value, setValue] = useState('');
  const emailref = useRef(null);
  const passwordref = useRef(null);
  const dispatch = useDispatch();

  const handelGoogle = () => {
    signInWithRedirect(auth, google).then((authUser) => {
      if (authUser) {
        dispatch(login({
          uid: authUser.uid,
          email: authUser.email,
        }))
      } else {
        dispatch(logout())
      }
    }).catch((error) => {
      setErrorMessage(error.message);
    });
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
    <div className='singin__login'> 

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
    </form>
    <div className='div__googlebtn'>
         <button
       onClick={handelGoogle}
       className='google__button'
     >
       Sing up with Google
     </button>
      <img
       className='google__logo'
       src='https://www.pngplay.com/wp-content/uploads/13/Google-Logo-PNG-HD-Quality.png'
       alt='google-login-logo' />
     </div>
 </div>
  )
}

export default SingIn;