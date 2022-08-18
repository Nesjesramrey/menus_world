import React from "react";
import "./menucard.css";


const MenuCard = ({ dish, navigate }) => {
  let descripcion = dish?.description;
  if (descripcion.length > 100) {
    descripcion = `${descripcion.slice(0, 100)}...`;
  }

  return (
    
    <div className="col  col-6" key={dish._id}>
         <div className="food-menu">
        <div>
          <div className="food">
            <div className="food-col food-image col-6">
              <img src={dish.image_Url} alt="Food" />
            </div>
            <div className="food-col food-detail">
              <div className="name-food-name">
                <h5>{dish.dishName}</h5>
               <span className="name-food-price"> ${dish.price}</span>
              </div>
              <div className="name-food-descrip">{descripcion}</div>
            </div>
            <div className="iconos">
              <div
                className="icons8-comments"
                onClick={() => navigate(`/detalle/${dish._id}`)}
              ></div>
              <div
                className="icons8-edit"
                onClick={() => navigate(`edit/${dish._id}`)}
              ></div>
              <div
                className="icons8-trash"
                onClick={() => navigate(`delete/${dish._id}`)}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>


  );
  };


export default MenuCard;

