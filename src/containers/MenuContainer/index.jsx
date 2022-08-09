import { Outlet, Link } from "react-router-dom";
import "./MenuContainer.css";
import NavBar from "../../../src/components/NavBar";
import Button from "react-bootstrap/Button";

export default function MenuContainer() {
  return (
    <div className="container-welcome">
      {NavBar(1)}

      <div className="container">
        <div className="button-nav">
        <Button bsPrefix="custom-btn" to="/menu" as={Link}>
          General
        </Button>{" "}
        <Button bsPrefix="custom-btn" to="entradas" as={Link}>
          Entradas
        </Button>{" "}
        <Button bsPrefix="custom-btn" to="ensaladas" as={Link}>
          Ensaladas
        </Button>{" "}
        <Button bsPrefix="custom-btn" to="sopas" as={Link}>
          Sopas
        </Button>{" "}
        <Button bsPrefix="custom-btn" to="pescados" as={Link}>
          Mariscos
        </Button>{" "}
        <Button bsPrefix="custom-btn" to="cortes" as={Link}>
          Cortes
        </Button>{" "}
        <Button bsPrefix="custom-btn" to="snacks" as={Link}>
          Snacks
        </Button>{" "}
        <Button bsPrefix="custom-btn" to="postres" as={Link}>
          Postres
        </Button>{""}
        <Button bsPrefix="custom-btn" to="bebidasnoalcoholicas" as={Link}>
          Bebidas s/Alcohol
        </Button>{" "}
        <Button bsPrefix="custom-btn" to="bebidasalcoholicas" as={Link}>
          Bebidas c/Alcohol
        </Button>{" "}
        </div>
        <Outlet />
      </div>
    </div>
  );
}
