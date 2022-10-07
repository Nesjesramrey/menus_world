import "./NavBar.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logoc200.png";
import Cookies from "universal-cookie";

//components
import Input from "../../../src/components/Input/index";
import Login from "../../../src/components/Login";
import ButtonsMenu from "../ButtonsMenu";

//Modal
import Modal from "react-modal";

export default function NavBar() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [restaurantName, setRestaurantName] = useState("");
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

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
    navigate(`/`);
  };

  return (
    <div className="container g-0">
      <nav className="navbar navbar-light bg-light navFlex">
        <div className="logo-nav">
          <img
            loading="lazy"
            className="navbar-brand imgNav"
            src={logo}
            alt="logo"
            onClick={() => navigate("/")}
          />
        </div>

        <form className="nav-item" onSubmit={searchRestaurant}>
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
              onClick={() => navigate(`/restaurants/${restaurantName}`)}
            >
              Buscar
            </button>
          </div>
        </form>

        <div class="col-2 content-sesion">
          <button
            type="button"
            className={`${
              userLogged
                ? "btn-home-nav nav-item active"
                : "btn-home-nav d-none"
            }`}
            onClick={logout}
          >
            Cerrar Sesion
          </button>

          <button
            onClick={() => setModalIsOpen(true)}
            type="button"
            className={`${
              !userLogged
                ? "btn-home-nav  nav-item active"
                : "btn-home-nav d-none"
            }`}
          >
            Inicio de Sesion
          </button>
        </div>
      </nav>

      <Modal isOpen={modalIsOpen} className="modalStyles">
        <Login />
        <button
          className="btn-close position-absolute top-0 end-0 "
          onClick={() => setModalIsOpen(false)}
        ></button>
      </Modal>
    </div>
  );
}
