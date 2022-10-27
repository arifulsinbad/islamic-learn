import React from 'react';
import { useContext } from 'react';
import { Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FaUber } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';
import Tooltip from 'react-bootstrap/Tooltip';
const Header = () => {
 const {user, logOut} = useContext(AuthContext)
const handleLogout =()=>{
 logOut()
 .then(()=>{})
 .catch(error =>{
  console.error(error)
 })
}

 return (
  <div>
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home"><Link to = '/'><h3>Islamic Learn</h3></Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">FAQ</Nav.Link>
            <Nav.Link href="/blog">Blog</Nav.Link>
            
          </Nav>
          <Nav>
        <div>
     
        </div>
            <>
            {user?.uid ? <>
            
            
            <span className='text-white mx-2'>{user?.displayName}</span>
             <button onClick={handleLogout} className='mx-2'>Log Out</button>
        
            </> : <>
            <Link to='/login'>Login</Link>
            <Link to ='/signup'>Sign Up</Link>
            
            </>

            }
            
            </>
            <>
              <Link >
              {user?.uid ? 
              <Image style={{height: '30px'}} roundedCircle src={user?.photoURL} ></Image> :
              <FaUber></FaUber>
             

              }
              </Link>
            </>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </div>
 );
};

export default Header;