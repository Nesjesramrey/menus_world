import { Outlet, Link } from "react-router-dom";
import "./MenuContainer.css";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function MenuContainer() {
  return (
    // <div className="Menu-container">
    //   <div className="Menu-container-2">
    //     <div className="Menu-container-nav">
    //       <nav className="navContainer">
    //         <Link to="/menu">General</Link>
    //         <Link to="entradas">Entradas</Link>
    //         <Link to="ensaladas">Ensaladas</Link>
    //         <Link to="sopas">Sopas</Link>
    //         <Link to="pescados">Pescados</Link>
    //         <Link to="cortes">Cortes</Link>
    //         <Link to="snacks">Snacks</Link>
    //         <Link to="bebidasnoalcoholicas">Bebidas s/Alcohol</Link>
    //         <Link to="bebidasalcoholicas">Bebidas c/Alcohol</Link>
    //         <Link to="postres">Postres</Link>
    //       </nav>
    //     </div>
    //     <div className="Menu-container-content">
    //       <div className="Content-container">
    //         <Outlet />
    //       </div>
    //     </div>
    //   </div>
    // </div>
    
    <Nav fill variant="tabs" defaultActiveKey="/menu">
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Nav.Item>
        <Nav.Link to="/menu" as={Link} >General</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link to="entradas" as={Link} >Entradas</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link to="ensaladas" as={Link} >Ensaladas</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link to="sopas" as={Link}>Sopas</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link to="pescados" as={Link}>Mariscos</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link to="cortes" as={Link}>Cortes</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link to="snacks" as={Link}>Snacks</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link to="bebidasnoalcoholicas" as={Link}>Bebidas s/Alcohol</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link to="bebidasalcoholicas" as={Link}>Bebidas c/Alcohol</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link to="postres" as={Link}>Postres</Nav.Link>
      </Nav.Item>

      {/* <Nav.Item>
          <Nav.Link eventKey="disabled" disabled>
          Disabled
        </Nav.Link>
      </Nav.Item>  */}
     
      <Outlet />
      
    </Nav>
      
  );
}
