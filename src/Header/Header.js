import React from 'react';
import { useContext } from 'react';
import { Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FaToggleOff, FaToggleOn,FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import { useState } from 'react';
const Header = () => {
 const {user, logOut, setColor, color} = useContext(AuthContext)
 

const handleLogout =()=>{
 logOut()
 .then(()=>{})
 .catch(error =>{
  console.error(error)
 })
}
const handleColor = (event)=>{
  if(event){
  setColor('dark')

}

}
const handleDark =(event)=>{
if(event){
  setColor('primary')
}
}

 return (
  <div>
<Navbar collapseOnSelect expand="lg" bg={color} variant="dark">
      <Container>
        <Navbar.Brand href="#home"><Link to = '/'><h3>Islamic Learn</h3></Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">FAQ</Nav.Link>
            <Nav.Link href="/blog">Blog</Nav.Link>
      <p>      <FaToggleOff onClick={handleColor}></FaToggleOff>
            <FaToggleOn className='text-primary' onClick={handleDark}></FaToggleOn></p>
          </Nav>
          <Nav>
        <div>
     
        </div>
            <>
            {user?.uid ? <>
            
            
            <span className='text-white mx-2'>{user?.displayName}</span>
             <Link onClick={handleLogout} className='mx-2'>Log Out</Link>
        
            </> : <>
            <Link className='mx-3' to='/login'>Login</Link>
            <Link to ='/signup'>Sign Up</Link>
            
            </>

            }
            
            </>
            <>
              <Link >
              {user?.uid ? 
             <>
                 {[`bottom`].map((placement) => (
        <OverlayTrigger
          key={placement}
          placement={placement}
          overlay={
            <Tooltip id={`tooltip-${placement}`}>
               <strong>{user?.displayName}</strong>.
            </Tooltip>
          }
        >
          <Image style={{height: '30px'}} roundedCircle src={user?.photoURL} ></Image>
         
        </OverlayTrigger>
      ))}
             
              </> :
              <FaUser className='mx-2'></FaUser>
             

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