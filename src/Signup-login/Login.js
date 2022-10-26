import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { GoogleAuthProvider } from 'firebase/auth';
import { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';

const Login = () => {
 const {google} = useContext(AuthContext)
 const provider = new GoogleAuthProvider()
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
 return (
  <div>
       <Form>
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
    </Form>
    <ButtonGroup vertical>
      <Button onClick={handleGoogle} variant="outline-primary"><FaGoogle></FaGoogle> Login With Google</Button>
      <Button  variant="outline-dark my-3"><FaGithub></FaGithub> Login With GitHub</Button>

    </ButtonGroup>
  </div>
 );
};

export default Login;