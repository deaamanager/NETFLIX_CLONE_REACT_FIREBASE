import React, { useEffect } from 'react';
import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';
import Login from './screens/Login';
import {
  BrowserRouter, Routes, Route, 
} from "react-router-dom";

import './App.css';
import { auth } from './firebase';
import { useDispatch, useSelector } from 'react-redux';
import { logout,login, selectUser } from './features/userSlice';
import Footer from './Footer';


function App() {
  const user = useSelector(selectUser) ;
  const dispatch = useDispatch();
useEffect(() => {
 const unsubscribe = auth.onAuthStateChanged(authUser => {
  
    if (authUser) {
       
        dispatch(login({
          uid: authUser.uid,
          email: authUser.email,
        }))
    } else {
    
      dispatch(logout())
    }

 })

  return unsubscribe;
}, [dispatch]);
  return (
    <div className="app">
      <BrowserRouter>
      {!user ? (
      <Login /> 
     
      ) : (

        <Routes>
          <Route exact path="/" element={<HomeScreen />} />
          <Route path="/profile" element={<ProfileScreen />} />
          <Route path="/regstir" element={<ProfileScreen />} />
        </Routes>

        
          )}
      </BrowserRouter>

      <Footer />
    </div>
  );
}

export default App;
