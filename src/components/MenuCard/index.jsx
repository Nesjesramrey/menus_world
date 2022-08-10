import React from "react";

import "./menucard.css";


const MenuCard = ({dish, navigate}) => {
    let descripcion = dish?.description
    if (descripcion.length > 200){
        descripcion = `${descripcion.slice(0, 180)}...` 
    } 

    return ( 
        <div className="col  col-6" key={dish._id}>
        <div className="food-menu">
          <div className="food">
               
              <div className="food-col food-image" >
                <img src={dish.image_URL} alt="Food" />
              </div>  
                <div className="food-col food-detail">
                  <div className="name-food-name">
                    <h5>{dish.dishName} 
                    </h5>
                    <span className="name-food-price"> ${dish.price}</span>
                  
                  </div> 
                <div className="name-food-descrip">{descripcion}</div>
                
                </div>
                <div className="iconos">
                  <div class="icons8-edit" onClick={() => navigate(`edit/${dish._id}`)}></div>
                  <div class="icons8-trash" onClick={() => navigate(`delete/${dish._id}`)}></div>
                </div>
                
                
              
           
          </div>  
        </div>
      </div>


    );





} 

export default MenuCard