import React from 'react';
import { useLoaderData } from 'react-router-dom';

import Summary from './Summary';
const Catagory = () => {
 const loader = useLoaderData()
 console.log(loader)
 
 return (
  <div>
{
 loader.map(data =><Summary key={data._id} data={data}></Summary>)
}
  </div>
 );
};

export default Catagory;