import { useNavigate } from "react-router-dom";

import NavBar from "../../../src/components/NavBar";

import "./Home.css";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="container-welcome">
      {NavBar(1)}
      <div className="container-home">
        <img
          src="https://www.lifeder.com/wp-content/uploads/2018/04/Nuestra-comida-deberia-ser-nuestra-medicina-y-nuestra-medicina-deberia-ser-nuestra-comida.-min.jpg"
          alt="cabecera"
          className="img-home"
        ></img>
        <div className="container-home-menu">
          <h1 className="title-home">MENU'S WORLD</h1>
          <h2 className="p-home">
            Bienvenido a la pagina que busca mejorar tu experiencia digital de
            consulta de menus.Te invitamos a registrarte o ir directamente a ver
            los menu
          </h2>

          <button
            type="button"
            className="btn-home"
            onClick={() => navigate(`menu/entradas`)}
          >
            Ir al menu
          </button>

          <button
            type="button"
            className="btn-home"
            onClick={() => navigate(`registro`)}
          >
            Registrarme
          </button>
        </div>
      </div>
    </div>
  );
}
