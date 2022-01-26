import React from "react"
import fotos from "./fotos"
import "./auriculares.css"


  

	const Productos = () => {
	
     return (

		<div>
       

    
        <div className="productos-general">
           
            
            <div className="container">
                <div className="row row-cards">
                    <div className="col-md-5 col-sm-10 productos card">
                        <div className="card-body">
                            <img src={fotos[0].img} alt="" className="card-img-top"/>
                            <h5 className="card-title">{fotos[0].Articulo}</h5>
                            <h6 className="card-subtitle mb-2 text-muted">{fotos[0].Descripción}</h6>
                            {/* <p className="card-text">Microfono de alta sensibilidad. Cuenta ademas con filtro antipop</p> */}
                        </div>                
                    </div>
                    <div className="col-md-5 col-sm-10 productos card">
                        <div className="card-body">
						<img src={fotos[1].img} alt="" className="card-img-top"/>
                            <h5 className="card-title">{fotos[1].Articulo}</h5>
                            <h6 className="card-subtitle mb-2 text-muted">{fotos[1].Descripción}</h6>                  
                        </div>
                    </div>
                </div>
                <div className="row row-cards">
                    <div className="col-md-5 col-sm-10 productos card">                        
                        <div className="card-body">
						<img src={fotos[2].img} alt="" className="card-img-top"/>
                            <h5 className="card-title">{fotos[2].Articulo}</h5>
                            <h6 className="card-subtitle mb-2 text-muted">{fotos[2].Descripción}</h6>
                        </div>                       
                    </div>
                    <div className="col-md-5 col-sm-10 productos card">
                        <div className="card-body">
						<img src={fotos[3].img} alt="" className="card-img-top"/>
                            <h5 className="card-title">{fotos[3].Articulo}</h5>
                            <h6 className="card-subtitle mb-2 text-muted">{fotos[3].Descripción}</h6>
                        </div>                      
                    </div>
                </div>
                <div className="row row-cards">
                    <div className="col-md-5 col-sm-10 productos card">                        
                        <div className="card-body">
						<img src={fotos[4].img} alt="" className="card-img-top"/>
                            <h5 className="card-title">{fotos[4].Articulo}</h5>
                            <h6 className="card-subtitle mb-2 text-muted">{fotos[4].Descripción}</h6>      
                        </div>                       
                    </div>
                    <div className="col-md-5 col-sm-10 productos card">
                        <div className="card-body">
                        <img src={fotos[5].img} alt="" className="card-img-top"/>
                            <h5 className="card-title">{fotos[5].Articulo}</h5>
                            <h6 className="card-subtitle mb-2 text-muted">{fotos[5].Descripción}</h6>   
                        </div>                      
                    </div>
                </div>
                <div className="row row-cards">
                    <div className="col-md-5 col-sm-10 productos card">                        
                        <div className="card-body">
						<img src={fotos[6].img} alt="" className="card-img-top"/>
                            <h5 className="card-title">{fotos[6].Articulo}</h5>
                            <h6 className="card-subtitle mb-2 text-muted">{fotos[6].Descripción}</h6>    
                        </div>                       
                    </div>
                    <div className="col-md-5 col-sm-10 productos card">
                        <div className="card-body">
						<img src={fotos[7].img} alt="" className="card-img-top"/>
                            <h5 className="card-title">{fotos[7].Articulo}</h5>
                            <h6 className="card-subtitle mb-2 text-muted">{fotos[7].Descripción}</h6>    
                        </div>                      
                    </div>
                </div>
            </div>
            
        </div>
    </div>    
        
    )
		 
		
	
	 }

	

export default Productos