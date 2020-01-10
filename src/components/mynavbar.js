import React, { Component } from 'react';
import { Navbar, NavItem, Nav } from 'react-bootstrap';
import '../styles/mynavbar.css';

class Mynav extends Component {
	render() {
		return (
			<Navbar className="navbar mynav">
				<Navbar.Brand>LearnMath</Navbar.Brand>
				<Nav className="ml-auto">
					<Nav className="navbar-item-container">
						<NavItem>ABC</NavItem>
						<NavItem>123</NavItem>
					</Nav>
				</Nav>
			</Navbar>
		);
	}
}

export default Mynav;
