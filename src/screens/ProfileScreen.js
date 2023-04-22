import React from 'react'
import './ProfileScreen.css';
import Nav from '../Nav';
import PlansScreen from './PlansScreen';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';
import { auth } from '../firebase';

function ProfileScreen() {
  const user = useSelector(selectUser);
  return (
    <div className='profileScreen'>
      <Nav />
      <div className="profileScreen__body">
        <h1>Edit Profile</h1>
        <div className="profileScreen__info">
          <img
          src="https://i.pinimg.com/564x/c4/88/34/c488340ad56e5454f4576f6c708b63aa.jpg"
          alt=""
          />
          <div className="profileScreen__details">
            <h2>{user.email}</h2>
            <div className="profileScreen__plans">
              <h3>Plans</h3>
              <PlansScreen />
              <button
              onClick={() => auth.signOut()}
               className="profileScreen__signOut">Sign Out</button>
              </div>
            </div>
            </div>
            </div>

    </div>
  )
}

export default ProfileScreen