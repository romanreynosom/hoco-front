import React from 'react'
import './pie.css'
import insta from "../logos/insta.svg"
import email from "../logos/email.svg"



const Pie = () => {
    return (
        <div className='pie'>
      <div><a className='ancla'> <img src={insta} alt=''/> Hoco Argentina</a> </div>  
       <div> <a className='ancla'><img src={email} alt='...'/>  hoco@hoco.com.ar </a>  </div>      
       
          </div> 
      
        
    )
}

export default Pie
