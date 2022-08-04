import './NavBar.css'
import React, { useState } from 'react';

export default function NavBar() {
	const [isOpen, setIsOpen] = useState(false);
	const toggle = () => setIsOpen(!isOpen);

	return (
		<nav class="navbar sticky-top navbar-expand-lg nav-0">
			<div class="container-fluid ">
				<button
					class="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarTogglerDemo01"
					aria-controls="navbarTogglerDemo01"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span class="navbar-toggler-icon"></span>
				</button>
				<div class="collapse navbar-collapse topNavBar" id="navbarTogglerDemo01">
					<a class="navbar-brand" href="#">
						Logo
					</a>
					<ul class="navbar-nav me-auto mb-2 mb-lg-0">
						<li class="nav-item">
							<a class="nav-link active" aria-current="page" href="#">
								Home
							</a>
						</li>
						<li class="nav-item">
							<a class="nav-link" href="#">
								Registrarse
							</a>
						</li>
					</ul>
					<form class="d-flex">
						<input
							class="form-control me-2"
							type="search"
							placeholder="Search"
							aria-label="Search"
						/>
						<button class="btn btn-outline-success" type="submit">
							Search
						</button>
					</form>
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
