import { Outlet, Link } from "react-router-dom";
import "./MenuContainer.css";

export default function MenuContainer() {
  return (
    <div className="Menu-container">
      <div className="Menu-container-2">
        <div className="Menu-container-nav">
          <nav className="navContainer">
            <Link to="/menu">General</Link>
            <Link to="entradas">Entradas</Link>
            <Link to="ensaladas">Ensaladas</Link>
            <Link to="sopas">Sopas</Link>
            <Link to="pescados">Pescados</Link>
            <Link to="cortes">Cortes</Link>
            <Link to="snacks">Snacks</Link>
            <Link to="bebidasnoalcoholicas">Bebidas No Alc</Link>
            <Link to="bebidasalcoholicas">Bebidas Alcoholicas</Link>
            <Link to="postres">Postres</Link>
          </nav>
        </div>
        <div className="Menu-container-content">
          <div className="Content-container">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}
