import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { GoogleAuthProvider } from 'firebase/auth';
import { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Login = () => {
 const {google, login} = useContext(AuthContext)
 const provider = new GoogleAuthProvider()
 const [error, setError] = useState('')
 const navigate = useNavigate()
 const location =useLocation()
 const form =location.state?.from?.pathname || '/'
 const handleGoogle = () =>{
google(provider)
.then(result =>{
 const user = result.user
 console.log(user)
})
.catch(error =>{
 console.error(error)
})
 }
const handleLogin = event =>{
 event.preventDefault()
 const from = event.target;
 const email = from.email.value;
 const password = from.password.value;
 console.log(email, password)
 login(email, password)
 .then(result =>{
  const user = result.user;
  console.log(user)
  from.reset()
  navigate(form, {replace: true})

 })
 .catch(error =>{
  console.error(error)
  setError(error.message)
 })
}
 return (
  <div>
       <Form onSubmit={handleLogin}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control name='email' type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control name='password' type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
      {error}
    </Form>
    <ButtonGroup vertical>
      <Button onClick={handleGoogle} variant="outline-primary mt-5"><FaGoogle></FaGoogle> Login With Google</Button>
      <Button  variant="outline-dark my-3"><FaGithub></FaGithub> Login With GitHub</Button>

    </ButtonGroup>
  </div>
 );
};

export default Login;