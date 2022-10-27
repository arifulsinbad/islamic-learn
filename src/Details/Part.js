import React from 'react';

const Part = ({p}) => {
const {part} =p;
 return (
  <div>
  <a className='text-primary' href={part} target="_blank" >PDF FILE</a>
  </div>
 );
};

export default Part;