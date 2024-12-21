import React from 'react'
 
const Movie = ({title, image}) => {
   return (
    <div className='container max-w-2xl rounded shadow-lg flex flex-col items-center'>
        
        <img src={image} className='w-40 h-48 mt-4'/>
        <h3 className='p-4 font-semibold'>{title}</h3>
   
     </div >
   )
 };

export default Movie;