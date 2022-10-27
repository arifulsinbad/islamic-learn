import React, { Children } from 'react';
import { createContext } from 'react';
import app from '../firebase.config';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { useState } from 'react';
import { useEffect } from 'react';
export const AuthContext = createContext()
const auth = getAuth(app)
const AuthProvider = ({children}) => {
 const [user, setUser] = useState(null)
 const [loading, setLoading] = useState(true)
 const [color, setColor] = useState('dark')



 const google = (provider)=>{
return signInWithPopup(auth, provider)
 }

 const logOut = ()=>{
  return signOut(auth)
 } 
 const createUser = (profile) =>{
  return updateProfile(auth.currentUser, profile)
 }
 const signUp = (email, password)=>{
return createUserWithEmailAndPassword(auth, email, password)
 }
 const login = (email, password)=>{
  return signInWithEmailAndPassword(auth, email, password)
 }

 useEffect(()=>{
  const unSubcribe = onAuthStateChanged(auth, (currentUser)=>{
   console.log(currentUser)
   setUser(currentUser)
   setLoading(false)
  })

return ()=>{
 unSubcribe()
}
 },[])
 const authInfo = {user, loading, color, google, logOut, signUp, createUser, login, setColor}
 return (
<div >
<AuthContext.Provider  value={authInfo} >
   {children}
  </AuthContext.Provider>
</div>
 );
};

export default AuthProvider;