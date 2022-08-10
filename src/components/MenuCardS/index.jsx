import React from "react";

import "../MenuCard/menucard.css";


const MenuCardS = ({dish, navigate}) => {
    let descripcion = dish?.description
    if (descripcion.length > 100){
        descripcion = `${descripcion.slice(0, 100)}...` 
    } 

    return ( 
        <div className="col  col-6" key={dish._id}>
        <div className="food-menu">
          <div className="food">
               
              <div className="food-col food-image" >
                <img src={dish.image_Url} alt="Food" />
              </div>  
                <div className="food-col food-detail">
                  <div className="name-food-name">
                    <h5>{dish.dishName} 
                    </h5>
                    <span className="name-food-price"> ${dish.price}</span>
                  
                  </div> 
                <div className="name-food-descrip">{descripcion}</div>
                
                </div>
               
                
                
              
           
          </div>  
        </div>
      </div>


    );

} 

export default MenuCardS