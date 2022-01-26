import React from 'react';
import './index.css';
import imagenes from '../img/imagenes';
import  { Link } from 'react-router-dom';




const Index = () => {
    return (
        <div className='Index'>
            
             <div>
             <Link to= 'cables'> <img className='img' src={imagenes[3].img}  /> </Link>
             <h2> {imagenes[3].title} </h2>
            </div>    

            <div>
               <Link to= 'accesoriosauto'> <img className='img' src={imagenes[0].img}  />   </Link>   
               <h2> {imagenes[0].title} </h2>
            </div> 
           <div> 
               <Link to='auriculares'> <img className='img' src={imagenes[2].img}/>  </Link>
               <h2> {imagenes[2].title} </h2>   
           </div>
           
          
     
        </div>
        
    )
}

export default Index
