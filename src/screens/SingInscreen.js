import React,{useRef} from 'react'
import './SingInscreen.css'
import { auth } from '../firebase';


function SingInscreen() {
  const emailref = useRef(null);
  const passwordref = useRef(null);
 
 
  const register = (e) => {
    e.preventDefault();
    
    auth.createUserWithEmailAndPassword(
      emailref.current.value,
      passwordref.current.value
    ).then((authUser) => {
      //console.log(authUser);
    }
    ).catch((error) => {
      alert(error.message);
    });
   };
 



  const singin = (e) => {
    e.preventDefault();
    auth.signInWithEmailAndPassword(
      emailref.current.value,
      passwordref.current.value
    ).then((authUser) => {
      console.log(authUser);
    }
    ).catch((error) => {
      alert(error.message);
    });
  };

  return <div className='singin__screen'>
    <form>
        <h1>Sign In</h1>
        <input ref={emailref} type="email" placeholder="Email Address" />
        <input ref={passwordref} type="password" placeholder="Password" />
        <button type="submit" onClick={singin} >Sign In</button>
        <h4>
            <span className="singin__gray">New to deaflix? </span>
            <span className="singin__link" onClick={register}>Sign up now.</span>
        </h4>
    </form>
    </div>;

}

export default SingInscreen