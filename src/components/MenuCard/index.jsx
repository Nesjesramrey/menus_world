import React from "react";

import "./menucard.css";

//Cokkies for use name of restaurante and user category
import Cookies from "universal-cookie";

const MenuCard = ({ dish, navigate }) => {
  let descripcion = dish?.description;
  if (descripcion.length > 100) {
    descripcion = `${descripcion.slice(0, 100)}...`;
  }

  const cookies = new Cookies();
  const userType = cookies.get("TipoUsuario");

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
                className={`${
                  !userType
                    ? "icons8-comments d-none"
                    : "icons8-comments active"
                }`}
                onClick={() => navigate(`/detalle/${dish._id}`)}
              ></div>
              <div
                className={`${
                  !userType || userType === "Comensal"
                    ? "icons8-edit d-none"
                    : "icons8-edit active"
                }`}
                onClick={() => navigate(`edit/${dish._id}`)}
              ></div>
              <div
                className={`${
                  !userType || userType === "Comensal"
                    ? "icons8-trash d-none"
                    : "icons8-trash active"
                }`}
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
