import React, { useRef, useState } from 'react'
import './SingInscreen.css'
import { auth } from '../firebase';
import { useTypewriter, Cursor } from 'react-simple-typewriter';

import SingIn from './SingIn';
import ForgetPassword from './ForgetPassword';
function SingInscreen() {
  const [login, setLogin] = useState(false);
  const [forget, setForget] = useState(false);
  const emailref = useRef(null);
  const passwordref = useRef(null);
  const [errorMessage, setErrorMessage] = useState("");
  const [write] = useTypewriter({
    words: ["Sing In . . ."],
    loop: true,
    delaySpeed: 1000,

  });
  const singin = (e) => {
    e.preventDefault();
    auth.signInWithEmailAndPassword(
      emailref.current.value,
      passwordref.current.value
    ).then((authUser) => {
    }
    ).catch((error) => {
      setErrorMessage(error.message);
    });
  };
  return <div className='singin__screen'>
    {login ? (
      <SingIn />
    ) : (
      <form>
        <h1><span>{write}</span>
          <span><Cursor />  </span>
        </h1>
        <input ref={emailref} type="email" placeholder="Email Address" />
        <input ref={passwordref} type="password" placeholder="Password" />
        {forget ? (
          <ForgetPassword />
        ) : (
          <p className='forget__password' onClick={() => setForget(true)}>Forget Password ?</p>
        )}
        <button type="submit" onClick={singin} >Sign In</button>
        {errorMessage && <div className="singin__error">
          <h1 className='error__title'>plase register with your email</h1>
          <p className='error__message'>reg</p>
          <button className='error__button' onClick={() => setErrorMessage("")}>Close</button>
        </div>}
        <h4>
          <span className="singin__gray">New to deaflix? </span>
          <span className="singin__link" onClick={() => setLogin(true)} >Sign up now.</span>
        </h4>
      </form>
    )}
  </div>;

}

export default SingInscreen;