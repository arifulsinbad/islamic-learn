import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import RightSide from '../RightSide/RightSide';

const Main = () => {
 return (
  <div>
   <Header></Header>
   <Container>
    <Row>
    <Col lg='3'>
      <RightSide></RightSide>
     </Col>
     <Col lg='9'>
      <Outlet></Outlet>
     </Col>
     
    </Row>
    
   </Container>
   <Footer></Footer>
  </div>
 );
};

export default Main;