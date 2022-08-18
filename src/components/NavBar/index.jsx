import "./NavBar.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logoc200.png";
import Cookies from "universal-cookie";

//components
import Input from "../../../src/components/Input/index";
import Login from "../../../src/pages/Login/index";

//Modal
import Modal from "react-modal";

export default function NavBar() {
  const navigate = useNavigate();
  // const [isOpen, setIsOpen] = useState(false);
  const [restaurantName, setRestaurantName] = useState("");
  const [modalIsOpen, setModalIsOpen] = useState(false);
  // const toggle = () => setIsOpen(!isOpen);

  //Styles modal
  const customStyles = {
    content: {
      top: "30%",
      left: "50%",
      right: "50%",
      bottom: "25%",
      marginRight: "-45%",
      transform: "translate(-50%, -50%)",
    },
  };
  Modal.setAppElement("#root");

  //Cookies
  const cookies = new Cookies();
  const searchRestaurant = () => {
    cookies.remove("EndpointRestaurant");
  };

  const userLogged = cookies.get("Usuario");

  //This is for remove cookies of user
  const logout = () => {
    cookies.remove("Usuario", { path: "/" });
    cookies.remove("TipoUsuario", { path: "/" });
    cookies.remove("NombreResturante", { path: "/" });
    cookies.remove("Id", { path: "/" });
    navigate(`/menu/undefined`);
  };

  return (
    <div>
      <nav className="navbar sticky-top navbar-expand-lg nav-0">
        <div className="container-fluid d-flex justify-content-center">
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
              <div className="content-search  justify-content-center">
                <Input
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
                  <i className="bi bi-search"></i>
                </button>
              </div>
            </form>
            <button
              type="button"
              className={`${
                userLogged ? "btn-home active" : "btn-home d-none"
              }`}
              onClick={logout}
            >
              Cerrar Sesion
            </button>

            <button
              onClick={() => setModalIsOpen(true)}
              type="button"
              className={`${
                !userLogged ? "btn-home active" : "btn-home d-none"
              }`}
            >
              Inicio de Sesion
            </button>
          </div>
        </div>
      </nav>
      <Modal isOpen={modalIsOpen} style={customStyles}>
        <Login />
        <button
          className="btn-close position-absolute top-0 end-0 "
          onClick={() => setModalIsOpen(false)}
        ></button>
      </Modal>
    </div>
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
