import "./NavBar.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logoc200.png";
import Cookies from "universal-cookie";

//components
import Input from "../../../src/components/Input/index";

export default function NavBar({ isLogeddIn }) {
  const navigate = useNavigate();
  // const [isOpen, setIsOpen] = useState(false);
  const [restaurantName, setRestaurantName] = useState("");
  // const toggle = () => setIsOpen(!isOpen);

  const cookies = new Cookies();
  const searchRestaurant = () => {
    cookies.remove("EndpointRestaurant");
  };

  return (
    <nav className="navbar sticky-top navbar-expand-lg nav-0">
      <div className="container-fluid d-flex justify-content-center">
        <div
          className="collapse navbar-collapse topNavBar d-flex justify-content-between"
          id="navbarTogglerDemo01 "
        >
          <img
            className="img-home-navbar"
            src={logo}
            alt="logo"
            onClick={() => navigate("/")}
          />
          <form onSubmit={searchRestaurant}>
            <div className="content-search  justify-content-center">
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
          <button type="submit" className="login" onClick={() => navigate("/")}>
            {isLogeddIn ? "Cerrar Sesion " : "Iniciar Sesion"}
          </button>
        </div>
      </div>
    </nav>
  );
}
