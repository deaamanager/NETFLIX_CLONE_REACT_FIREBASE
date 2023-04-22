import React, { useEffect,useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./Nav.css"
function Nav() {
  const [show, handleShow] = useState(false);
  const history = useNavigate();
 
  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      handleShow(true)
    }else {
      handleShow(false)
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => window.removeEventListener('scroll', transitionNavBar)
  }, [])

  return (
    <div className={`nav ${show && 'nav__black'}`} >
     <div className='nav__contents' >
      <img
      onClick={() => history('/') }
      className='nav__logo'
      src='https://cdn.sanity.io/images/7n5v8za3/production/c47361678fd9e4cd6386a93804840d81fbbdc946-500x500.png' 
      alt='' />

      <img 
      onClick={() => history('/profile')}
      className='nav__avatar'
      src='https://i.pinimg.com/564x/c4/88/34/c488340ad56e5454f4576f6c708b63aa.jpg'
      alt=''
      />
     
      </div>
    </div>
  )
}

export default Nav