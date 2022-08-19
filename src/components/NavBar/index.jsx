import "./NavBar.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logoc200.png";
import Cookies from "universal-cookie";

//components
import Input from "../../../src/components/Input/index";
import Login from "../../../src/pages/Login/index";

//Modal
import Modal from "react-modal";

export default function NavBar() {
  const navigate = useNavigate();
  // const [isOpen, setIsOpen] = useState(false);
  const [restaurantName, setRestaurantName] = useState("");
  const [modalIsOpen, setModalIsOpen] = useState(false);
  // const toggle = () => setIsOpen(!isOpen);

  //Styles modal
  const customStyles = {
    content: {
      top: "30%",
      left: "50%",
      right: "50%",
      bottom: "25%",
      marginRight: "-45%",
      transform: "translate(-50%, -50%)",
    },
  };
  Modal.setAppElement("#root");

  //Cookies
  const cookies = new Cookies();
  const searchRestaurant = () => {
    cookies.remove("EndpointRestaurant");
  };

  const userLogged = cookies.get("Usuario");

  //This is for remove cookies of user
  const logout = () => {
    cookies.remove("Usuario", { path: "/" });
    cookies.remove("TipoUsuario", { path: "/" });
    cookies.remove("NombreResturante", { path: "/" });
    cookies.remove("Id", { path: "/" });
    navigate(`/menu/undefined`);
  };

  return (
    <div className="container">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <div className="navbar-brand">
              {" "}
              <img
                loading="lazy"
                className="navbar-brand__img"
                src={logo}
                alt="logo"
                onClick={() => navigate("/")}
              />
            </div>

            <form onSubmit={searchRestaurant}>
              <div className="col col-12 col-6 content-search  justify-content-center ">
                <Input
                  type="search"
                  placeholder="Buscar restaurante"
                  className="form-control"
                  value={restaurantName}
                  callback={(e) => setRestaurantName(e.target.value)}
                />
                <button
                  className="btn-search"
                  type="submit"
                  onClick={() => navigate(`/menu/${restaurantName}`)}
                >
                  Buscar
                  {/* <i className="bi bi-search"></i> */}
                </button>
              </div>
            </form>
            <button
              type="button"
              className={`${
                userLogged ? "btn-home-nav active" : "btn-home-nav d-none"
              }`}
              onClick={logout}
            >
              Cerrar Sesion
            </button>

            <button
              onClick={() => setModalIsOpen(true)}
              type="button"
              className={`${
                !userLogged ? "btn-home-nav active" : "btn-home-nav d-none"
              }`}
            >
              Inicio de Sesion
            </button>
          </div>
        </div>
      </nav>
      <Modal isOpen={modalIsOpen} style={customStyles}>
        <Login />
        <button
          className="btn-close position-absolute top-0 end-0 "
          onClick={() => setModalIsOpen(false)}
        ></button>
      </Modal>
    </div>
  );
}
