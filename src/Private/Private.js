import React from 'react';
import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';
import Spinner from 'react-bootstrap/Spinner';
const Private = ({children}) => {
 const {user, loading} = useContext(AuthContext)
 const location = useLocation()
 if(loading){
return <Spinner animation="border" variant="primary" />;
 }
if(!user){
 return <Navigate to='/login' state={{from:location}} replace></Navigate>
}
else{
 return children;
}
};

export default Private;