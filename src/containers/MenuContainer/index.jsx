import { Outlet, useNavigate } from "react-router-dom";
import "./MenuContainer.css";
import NavBar from "../../../src/components/NavBar";
import Button from "react-bootstrap/Button";
import { getIsUserAdmin, getIsLogeddIn } from "../../Auth/auth";
import Cookies from "universal-cookie";

export default function MenuContainer() {
  const navigate = useNavigate();
  const isAdmin = getIsUserAdmin();
  const isLogeddIn = getIsLogeddIn();

  const cookies = new Cookies();
  const endpointRestaurant = cookies.get("EndpointRestaurant");

  return (
    <div className="container-welcome  col-12">
      <NavBar isAdmin={isAdmin} isLogeddIn={isLogeddIn} />

      <div className="container col-10 ">
        <div className="button-nav col-1 col-md-12">
          <Button
            bsPrefix="custom-btn
        "
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
            onClick={() =>
              navigate(`bebidasnoalcoholicas/${endpointRestaurant}`)
            }
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
        <Outlet />
      </div>
    </div>
  );
}
