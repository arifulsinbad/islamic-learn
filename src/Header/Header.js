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
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
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
              <Image style={{height: '30px'}} roundedCircle src={user?.photoURL}></Image> :
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