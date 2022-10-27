import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FaEye } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Part from './Part';
import './Details.css'

const Details = () => {
 const loader = useLoaderData()
 const {_id, name, image, total_view, title, details, rating,link} = loader;
 // console.log(loader)
 
 return (
  <div>
    <div>
      <a href={`${name} resume.pdf`} 
      download={`${name} resume.pdf`}>
        
        <button className='button'>Resume PDF</button>
      </a>
    </div>
     <Card>
      <div>
      <Card.Header><h2>{name}</h2></Card.Header>
   <div className='d-flex'>
   <Card.Img variant="top" style={{width: '60%'}} src={image} />
    <div>
     <h3>PDF FILE CLICK</h3>
    {
     link.map(p =><h4><a className='text-primary mx-5 ' href={p.part} target="_blank" >PDF FILE</a></h4> )
    }
    </div>
   </div>
      </div>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
      
      <p>{details}</p>

        
        </Card.Text>
        <div className='d-flex justify-content-between'>
        <p>Rank: {rating.number}</p>
        <p><FaEye></FaEye> {total_view}</p>
        <Link to='/'><Button variant="primary">All Catagory</Button></Link>
        </div>
        
      </Card.Body>
    </Card>
  </div>
 );
};

export default Details;