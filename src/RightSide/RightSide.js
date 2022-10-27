import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Card from 'react-bootstrap/Card';

const RightSide = () => {

 const [catagory, setCatagory] = useState([])
 console.log(catagory)
useEffect(()=>{
  fetch('http://localhost:5000/islamic-catagory')
  .then(res => res.json())
  .then(data => setCatagory(data))
  .catch(error => console.error(error))
  
   },[])
 return (
  <div className='border-primary sticky-lg-top'>
    
   <h3>All Catagory :{catagory.length}</h3>
 {
  catagory.map(catagory =><p key={catagory.id} catagory={catagory}><Link to={`/catagory/${catagory.id}`}>
    
    <Card body className='bg-primary'>{catagory.name}</Card>.
    </Link></p>)
 }
 
  </div>
 );
};

export default RightSide;