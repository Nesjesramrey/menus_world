import "./NavBar.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logoc200.png";
import Cookies from "universal-cookie";

//components
import Input from "../../../src/components/Input/index";

export default function NavBar({ isLogeddIn }) {
  const navigate = useNavigate();
  // const [isOpen, setIsOpen] = useState(false);
  const [restaurantName, setRestaurantName] = useState("");
  // const toggle = () => setIsOpen(!isOpen);

  const cookies = new Cookies();
  const searchRestaurant = () => {
    cookies.remove("EndpointRestaurant");
  };

  return (
    <nav className="navbar sticky-top navbar-expand-lg nav-0">
      <div className="container-fluid d-flex justify-content-between">
        <button
          // className="navbar-toggler"
          // type="button"
          // data-bs-toggle="collapse"
          // data-bs-target="#navbarTogglerDemo01"
          // aria-controls="navbarTogglerDemo01"
          // aria-expanded="false"
          // aria-label="Toggle navigation"
        >
          {/* <span className="navbar-toggler-icon"></span> */}
        </button>
        <div
          className="collapse navbar-collapse topNavBar d-flex justify-content-between"
          id="navbarTogglerDemo01 "
        >
          <img
            className="img-home-navbar"
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
          <form onSubmit={searchRestaurant}>
            <div className="content-search">
            <Input

            className="form-control"
              type="text"
              type="search"
              placeholder="Buscar restaurante"
              className="form-control"
              value={restaurantName}
              callback={(e) => setRestaurantName(e.target.value)}
            />
            <button
              className="btn-search"
              type="submit"
              onClick={() => navigate(`/menu/${restaurantName}`)}
            >
              Buscar
              <i className="fas fa-search"></i>
            </button>
            </div>
          </form>
          <button type="submit" className="login" onClick={() => navigate("/")}>
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
