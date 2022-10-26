import React, { Children } from 'react';
import { createContext } from 'react';
import app from '../firebase.config';
import { getAuth, onAuthStateChanged, signInWithPopup } from "firebase/auth";
import { useState } from 'react';
import { useEffect } from 'react';
export const AuthContext = createContext()
const auth = getAuth(app)
const AuthProvider = ({children}) => {
 const [user, setUser] = useState(null)
 const google = (provider)=>{
return signInWithPopup(auth, provider)
 }

 useEffect(()=>{
  const unSubcribe = onAuthStateChanged(auth, (currentUser)=>{
   console.log(currentUser)
   setUser(currentUser)
  })
return ()=>{
 unSubcribe()
}
 },[])
 const authInfo = {user, google}
 return (
  <AuthContext.Provider value={authInfo}>
   {children}
  </AuthContext.Provider>
 );
};

export default AuthProvider;