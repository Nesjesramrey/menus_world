import "./NavBar.css";
import React, { useState } from "react";

export default function NavBar({isLogeddIn}) {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <nav className="navbar sticky-top navbar-expand-lg nav-0">
      <div className="container-fluid ">
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
          className="collapse navbar-collapse topNavBar"
          id="navbarTogglerDemo01"
        >
          <a className="navbar-brand" href="#">
            Logo
          </a>
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
          {/* <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form> */}
          
        </div>
        { isLogeddIn ? "cerrar secion " : "iniciar secion"}
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
