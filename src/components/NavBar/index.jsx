import "./NavBar.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/Logo500.png";

//components
import Input from "../../../src/components/Input/index";

export default function NavBar({ isLogeddIn }) {
  const navigate = useNavigate();
  // const [isOpen, setIsOpen] = useState(false);
  const [restaurantName, setRestaurantName] = useState("");
  // const toggle = () => setIsOpen(!isOpen);

  const searchRestaurant = () => {
    console.log("Searching");
  };

  return (
    <nav className="navbar sticky-top navbar-expand-lg nav-0">
      <div className="container-fluid d-flex justify-content-between">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo01"
          aria-controls="navbarTogglerDemo01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse topNavBar d-flex justify-content-between"
          id="navbarTogglerDemo01 "
        >
          <img
            className="img-home"
            src={logo}
            alt="logo"
            onClick={() => navigate("/")}
          />
          {/* <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/registro">
                Registrarse
              </a>
            </li>
          </ul> */}
          <form onSubmit={searchRestaurant} className="d-flex">
            <Input
              type="text"
              placeholder="Nombre del restaurante"
              value={restaurantName}
              callback={(e) => setRestaurantName(e.target.value)}
            />
            <button
              className="btn-search  btn-outline-success"
              type="submit"
              onClick={() => navigate(`/menu/cortes/${restaurantName}`)}
            >
              Search
            </button>
          </form>
          <button
            type="submit"
            className="login"
            onClick={() => navigate("/login")}
          >
            {isLogeddIn ? "Cerrar Sesion " : "Iniciar Sesion"}
          </button>
        </div>
      </div>
    </nav>

    // <Navbar>
    // 	<NavbarBrand href="/">reactstrap</NavbarBrand>
    // 	<NavbarToggler onClick={toggle} />
    // 	<Collapse isOpen={isOpen} navbar>
    // 		<Nav className="me-auto" navbar>
    // 			<NavItem>
    // 				<NavLink href="/components/">Components</NavLink>
    // 			</NavItem>
    // 			<NavItem>
    // 				<NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
    // 			</NavItem>
    // 			<UncontrolledDropdown nav inNavbar>
    // 				<DropdownToggle nav caret>
    // 					Options
    // 				</DropdownToggle>
    // 				<DropdownMenu right>
    // 					<DropdownItem>Option 1</DropdownItem>
    // 					<DropdownItem>Option 2</DropdownItem>
    // 					<DropdownItem divider />
    // 					<DropdownItem>Reset</DropdownItem>
    // 				</DropdownMenu>
    // 			</UncontrolledDropdown>
    // 		</Nav>
    // 		<NavbarText>Simple Text</NavbarText>
    // 	</Collapse>
    // </Navbar>
  );
}
