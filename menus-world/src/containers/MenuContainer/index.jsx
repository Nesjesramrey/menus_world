import { Outlet, Link } from "react-router-dom";
import "./MenuContainer.css";

export default function MenuContainer() {
  return (
    <div className="Menu-container">
      <div className="Menu-container-2">
        <div className="Menu-container-nav">
          <nav className="navContainer">
            <Link to="entries">Entradas</Link>
            <Link to="profiles">Cortes</Link>
            <Link to="about">Bebidas</Link>
            <Link to="profiles">Postres</Link>
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
