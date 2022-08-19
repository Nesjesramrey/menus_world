import React, { useState } from "react";
import "./menucard.css";

//Modal
import Modal from "react-modal";

//Cokkies for use name of restaurante and user category
import Cookies from "universal-cookie";

//components
import Delete from "../../../src/pages/Menu/Delete";

//Styles modal
const customStyles = {
  content: {
    top: "40%",
    left: "50%",
    right: "50%",
    bottom: "5%",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};
Modal.setAppElement("#root");

const MenuCard = ({ dish, navigate }) => {
  let descripcion = dish?.description;
  if (descripcion.length > 100) {
    descripcion = `${descripcion.slice(0, 100)}...`;
  }
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const cookies = new Cookies();
  const userType = cookies.get("TipoUsuario");
  const restaurantName = cookies.get("EndpointRestaurant");

  const deleteDish = () => {
    setModalIsOpen(true);
    navigate(`/menu/${restaurantName}?id=${dish._id}`);
  };

  return (
    <div className="col-10  col-md-6" key={dish._id}>
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
                onClick={() => {
                  deleteDish();
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>
      <Modal isOpen={modalIsOpen} style={customStyles}>
        <Delete />
        <button
          className="btn-close position-absolute top-0 end-0 "
          onClick={() => setModalIsOpen(false)}
        ></button>
      </Modal>
    </div>
  );
};

export default MenuCard;
