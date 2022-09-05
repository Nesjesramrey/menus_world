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
  const [ itemAcitve, setItemActive ] = useState(null);
  const isActive = (itemNumber) => itemNumber === itemAcitve


  const cookies = new Cookies();
  const endpointRestaurant = cookies.get("EndpointRestaurant");

  return (
    <div className="container-md d-flex flex-wrap col-12 sticky-top content-button">
      <Button
        bsPrefix="custom-btn"
        onClick={() => navigate(`/menu/${endpointRestaurant}`)}
        
      >
        General
      </Button>{" "}
      <Button
        bsPrefix="custom-btn"
        onClick={() => navigate(`entradas/${endpointRestaurant}`)}
      >
        Entradas
      </Button>{" "}
      <Button
        bsPrefix="custom-btn"
        onClick={() => navigate(`ensaladas/${endpointRestaurant}`)}
      >
        Ensaladas
      </Button>{" "}
      <Button
        bsPrefix="custom-btn"
        onClick={() => navigate(`sopas/${endpointRestaurant}`)}
      >
        Sopas
      </Button>{" "}
      <Button
        bsPrefix="custom-btn"
        onClick={() => navigate(`pescados/${endpointRestaurant}`)}
      >
        Pescados
      </Button>{" "}
      <Button
        bsPrefix="custom-btn"
        onClick={() => navigate(`cortes/${endpointRestaurant}`)}
      >
        Cortes
      </Button>{" "}
      <Button
        bsPrefix="custom-btn"
        onClick={() => navigate(`snacks/${endpointRestaurant}`)}
      >
        Snacks
      </Button>{" "}
      <Button
        bsPrefix="custom-btn"
        onClick={() => navigate(`postres/${endpointRestaurant}`)}
      >
        Postres
      </Button>
      {""}
      <Button
        bsPrefix="custom-btn"
        onClick={() => navigate(`bebidasnoalcoholicas/${endpointRestaurant}`)}
      >
        Bebidas s/Alcohol
      </Button>{" "}
      <Button
        bsPrefix="custom-btn"
        onClick={() => navigate(`bebidasalcoholicas/${endpointRestaurant}`)}
      >
        Bebidas c/Alcohol
      </Button>{" "}
    </div>
  );
}
