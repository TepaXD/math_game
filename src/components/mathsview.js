import React, { Component } from 'react';
import { Container, Row, Col } from 'react-grid-system';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import './styles/mathsview.css';

class Mathsview extends Component {
	render() {
		return (
			<div className="bg">
				<div className="container">
					<Row className="header">
						<Col>Valitse lasku!</Col>
					</Row>
					<div>
						<Link to="/addition" className="link">
							<Button className="box-1">
								<p className="text">+</p>
							</Button>
						</Link>
						<Link to="/subtraction" className="link">
							<Button className="box-2">
								<p className="text">-</p>
							</Button>
						</Link>
					</div>
					<div>
						<Link to="/multiplication" className="link">
							<Button className="box-3">
								<p className="text">x</p>
							</Button>
						</Link>
						<Link to="/division" className="link">
							<Button className="box-4">
								<p className="text">÷</p>
							</Button>
						</Link>
					</div>
				</div>
			</div>
		);
	}
}

export default Mathsview;
