import React, { useState } from "react";
import "./menucard.css";
import { calcMean } from "../../services/calcRatings";

//Modal
import Modal from "react-modal";

//Cokkies for use name of restaurante and user category
import Cookies from "universal-cookie";

//components
import Delete from "../../../src/components/Delete";

//Styles modal
const customStyles = {
  content: {
    top: "40%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};
Modal.setAppElement("#root");

const MenuCard = ({ dish, index, navigate }) => {
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

  const rating = calcMean(dish);

  return (
    <div key={index} className="cardMenu p-1 m-3 d-flex-r">
      <div className="menuCardImg">
        <a href={"../detalle/" + dish._id}>
          <img
            className="imgCardMenu"
            alt={dish.dishName}
            src={dish.image_Url}
          />
        </a>
      </div>
      <div className="menuCardContent d-flex-c">
        <div className="cardMenuTop">
          <p className="cardMenuTitle pStyle">{dish.dishName}</p>
          <div className="d-flex-r">
            <p className="cardMenuPrice pStyle">{"$ " + dish.price + ".00"}</p>
            <p className="pStyle">{rating}</p>
          </div>

          <p className="cardMenuDescription pStyle">{descripcion}</p>
        </div>

        <div className="cardMenuButtons d-flex-r">
          <div
            className={"icons8-comments active"}
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
