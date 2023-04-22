import React,{useState} from 'react'
import './Login.css'
import SingInscreen from './SingInscreen'

function Login() {
 
  const [signIn, setSignIn] = useState(false);

  return (
    <div className='loginscreen'>
        <div className="loginscreen__background">
            <img
            className="loginscreen__logo"
            src="https://cdn.sanity.io/images/7n5v8za3/production/c47361678fd9e4cd6386a93804840d81fbbdc946-500x500.png"
            alt=''
            />
            <button className="loginscreen__button">Sign In</button>
            <div className="loginscreen__gradient" />
            </div>

            <div>
                <div className="loginscreen__body">
                    {signIn ? (
                        <SingInscreen />
                    ) : (
                        <>
                        <h1>Unlimited films, TV programmes and more.</h1>
                        <h2>Watch anywhere. Cancel at any time.</h2>
                        <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
                        <div className="loginscreen__input">
                            <form>
                                <input type="email" placeholder="Email Address" />
                                <button onClick={() => setSignIn(true)}
                                 className="loginscreen__getstarted">GET STARTED</button>
                            </form>
                            </div>
                        </>
                    )}
                  
                        </div>

            </div>

    </div>
  )
}

export default Login