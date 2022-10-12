import "./NavBar.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo200.png";
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
    <div className="container sticky-top">
      <div class="row">
        <div class="col">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="col-2 logo-nav">
              {" "}
              <img
                loading="lazy"
                className="navbar-brand imgNav "
                src={logo}
                alt="logo"
                onClick={() => navigate("/")}
              />
              <div className="buttons-hamburger">
                <ButtonsMenu />
              </div>
            </div>

            <form class="col-8 " onSubmit={searchRestaurant}>
              <div className=" content-search">
                <Input
                  type="search"
                  placeholder="Elige tu restaurante..."
                  className="form-control content-input"
                  value={restaurantName}
                  callback={(e) => setRestaurantName(e.target.value)}
                />

                <button
                  className="button-search"
                  type="submit"
                  onClick={() => navigate(`/menu/${restaurantName}`)}
                >
                  <i className="bi bi-search"></i>
                </button>
              </div>
            </form>
            <div class="col-2 content-sesion">
              <button
                type="button"
                className={`${
                  userLogged ? "user-session active" : "btn-home-nav d-none"
                }`}
                onClick={logout}
              >
                <span className="span-user">
                  <i class="bi bi-person-circle"></i>Salir
                </span>
              </button>

              <button
                onClick={() => setModalIsOpen(true)}
                type="button"
                className={`${
                  !userLogged ? "user-session  active" : "btn-home-nav d-none"
                }`}
              >
                <div className="user-session">
                  <i class="bi bi-person-circle"></i>
                  <span className="span-user">Ingreso</span>
                </div>
              </button>
            </div>
          </nav>
        </div>
        <Modal isOpen={modalIsOpen} className="modalStyles">
          <Login />
          <button
            className="btn-close"
            onClick={() => setModalIsOpen(false)}
          ></button>
        </Modal>
      </div>
    </div>
  );
}
