import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';

import Catagories from './Catagories';

const Home = () => {
 const router = useLoaderData()
 // console.log(router)
 return (
  <div >
    <Row lg='2'>
    {
      router.map(loader => <Catagories key={loader._id} loader={loader} ></Catagories>)
     }
    </Row>
  </div>
 );
};

export default Home;