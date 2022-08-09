import { Outlet, Link } from "react-router-dom";
import "./MenuContainer.css";
import NavBar from "../../../src/components/NavBar";
import Button from "react-bootstrap/Button";

export default function MenuContainer() {
  return (
    <div className="container-welcome">
      {NavBar(1)}

      <div className="buttonscategoria">
        <Button className="btn" to="/menu" as={Link} size="sm">
          General
        </Button>{" "}
        <Button to="entradas" as={Link} size="sm">
          Entradas
        </Button>{" "}
        <Button to="ensaladas" as={Link} size="sm">
          Ensaladas
        </Button>{" "}
        <Button to="sopas" as={Link} size="sm">
          Sopas
        </Button>{" "}
        <Button to="pescados" as={Link} size="sm">
          Mariscos
        </Button>{" "}
        <Button to="cortes" as={Link} size="sm">
          Cortes
        </Button>{" "}
        <Button to="snacks" as={Link} size="sm">
          Snacks
        </Button>{" "}
        <Button to="bebidasnoalcoholicas" as={Link} size="sm">
          Bebidas s/Alcohol
        </Button>{" "}
        <Button to="bebidasalcoholicas" as={Link} size="sm">
          Bebidas c/Alcohol
        </Button>{" "}
        <Button to="postres" as={Link} size="sm">
          Postres
        </Button>
        {""}
        <Outlet />
      </div>
    </div>
  );
}
