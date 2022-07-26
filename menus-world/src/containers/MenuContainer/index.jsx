import { Outlet, Link } from "react-router-dom";
import "./MenuContainer.css";

export default function MenuContainer() {
  return (
    <div className="Menu-container">
      <div className="Menu-container-2">
        <div className="Menu-container-nav">
          <nav className="navContainer">
            <Link to="/menu">Entradas</Link>
            <Link to="cortes">Cortes</Link>
            <Link to="bebidas">Bebidas</Link>
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
