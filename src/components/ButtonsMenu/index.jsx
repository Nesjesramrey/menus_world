import { useNavigate } from "react-router-dom";

//CSS
import "./ButtonsMenu.css";

//Components
import Button from "react-bootstrap/Button";

//Cookies
import Cookies from "universal-cookie";
import { useState } from "react";

export default function ButtonsMenu() {
  const navigate = useNavigate();

  const cookies = new Cookies();
  const endpointRestaurant = cookies.get("EndpointRestaurant");

  return (
    <nav class="navbar container navbar-expand-lg navbar-ligth ">
      <button
        class="navbar-toggler d-flex d-lg-none flex-column justify-content-between"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#opciones"
        aria-expanded="false"
      >
        <span class="toggler-icon top-bar"></span>
        <span class="toggler-icon middle-bar"></span>
        <span class="toggler-icon bottom-bar"></span>
      </button>
      <div class="collapse navbar-collapse content-button" id="opciones">
        <ul class="col col-sm-12 content-nav">
          <li class="nav-item">
            <Button
              bsPrefix="custom-btn"
              onClick={() => navigate(`/menu/${endpointRestaurant}`)}
            >
              General
            </Button>{" "}
          </li>
          <li class="nav-item">
            <Button
              bsPrefix="custom-btn"
              onClick={() => navigate(`entradas/${endpointRestaurant}`)}
            >
              Entradas
            </Button>{" "}
          </li>
          <li class="nav-item">
            <Button
              bsPrefix="custom-btn"
              onClick={() => navigate(`ensaladas/${endpointRestaurant}`)}
            >
              Ensaladas
            </Button>{" "}
          </li>
          <li class="nav-item">
            <Button
              bsPrefix="custom-btn"
              onClick={() => navigate(`sopas/${endpointRestaurant}`)}
            >
              Sopas
            </Button>{" "}
          </li>
          <li class="nav-item">
            <Button
              bsPrefix="custom-btn"
              onClick={() => navigate(`pescados/${endpointRestaurant}`)}
            >
              Pescados
            </Button>{" "}
          </li>
          <li class=" nav-item">
            <Button
              bsPrefix="custom-btn"
              onClick={() => navigate(`cortes/${endpointRestaurant}`)}
            >
              Cortes
            </Button>{" "}
          </li>
          <li class="nav-item">
            <Button
              bsPrefix="custom-btn"
              onClick={() => navigate(`snacks/${endpointRestaurant}`)}
            >
              Snacks
            </Button>{" "}
          </li>
          <li class="nav-item">
            <Button
              bsPrefix="custom-btn"
              onClick={() => navigate(`postres/${endpointRestaurant}`)}
            >
              Postres
            </Button>
          </li>{" "}
          {""}
          <li class=" nav-item">
            <Button
              bsPrefix="custom-btn"
              onClick={() =>
                navigate(`bebidasnoalcoholicas/${endpointRestaurant}`)
              }
            >
              Bebidas s/Alcohol
            </Button>{" "}
          </li>
          <li class=" nav-item">
            <Button
              bsPrefix="custom-btn"
              onClick={() =>
                navigate(`bebidasalcoholicas/${endpointRestaurant}`)
              }
            >
              Bebidas c/Alcohol
            </Button>{" "}
          </li>
        </ul>
      </div>
    </nav>
  );
}
