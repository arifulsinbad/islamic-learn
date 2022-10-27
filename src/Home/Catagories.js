import React from 'react';
import { Image } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FaEye } from 'react-icons/fa';
import { Link } from 'react-router-dom';
const Catagories = ({loader}) => {
 const {_id, name, image, total_view, title, details, rating} = loader;
 // console.log(loader)
 return (
  <div className='mb-5'>
      <Card>
      <div>
      <Card.Header><h2>{name}</h2></Card.Header>
      <Card.Img variant="top" style={{width: '100%'}} src={image} />
      </div>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
        {details.length > 200 ? 
      <p>{details.slice(0, 200)+ '...'}</p> : 
      {details}

        }
        </Card.Text>
        <div className='d-flex justify-content-between'>
        <p>Rank: {rating.number}</p>
        <p><FaEye></FaEye> {total_view}</p>
        <Link to={`/details/${_id}`}><Button variant="primary">See More</Button></Link>
        </div>
        
      </Card.Body>
    </Card>
  </div>
 );
};

export default Catagories;