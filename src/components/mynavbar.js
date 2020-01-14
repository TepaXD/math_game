import React, { Component } from 'react';
import { Navbar, NavItem, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './styles/mynavbar.css';

class Mynav extends Component {
	render() {
		return (
			<Navbar className="navbar mynav">
				<Navbar.Brand>
					<Link to="/">LearnMath</Link>
				</Navbar.Brand>
				<Nav className="ml-auto">
					<Nav className="navbar-item-container">
						<NavItem>
							<Link to="/language">ABC</Link>
						</NavItem>
						<NavItem>
							<Link to="/maths">123</Link>
						</NavItem>
					</Nav>
				</Nav>
			</Navbar>
		);
	}
}

export default Mynav;
