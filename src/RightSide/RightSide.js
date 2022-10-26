import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';


const RightSide = () => {
 const [catagory, setCatagory] = useState()
 console.log(catagory)
 useEffect(()=>{
fetch('http://localhost:5000/islamic-catagory')
.then(res => res.json())
.then(data => setCatagory(data))

 }, [catagory])
 return (
  <div>
   <h3>All Catagory :{catagory.length}</h3>
 {
  catagory.map(catagory =><p key={catagory.id} catagory={catagory}><Link to={`/catagory/${catagory.id}`}>{catagory.name}</Link></p>)
 }
 
  </div>
 );
};

export default RightSide;