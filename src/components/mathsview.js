import React, { Component } from 'react';
import { Container, Col } from 'react-grid-system';
import { Link } from 'react-router-dom';
import '../styles/mathsview.css';

class Mathsview extends Component {
	render() {
		return (
			<body className="bg">
				<Container className="container">
					<div className="header">
						<Col>Valitse lasku!</Col>
					</div>
					<div className="row">
						<Link to="/maths/addition" className="link">
							<Col className="box-1">
								<p className="text">+</p>
							</Col>
						</Link>
						<Link to="/maths/subtraction" className="link">
							<Col className="box-2">
								<p className="text">-</p>
							</Col>
						</Link>
					</div>
					<div className="row">
						<Link to="/maths/multiply" className="link">
							<Col className="box-3">
								<p className="text">x</p>
							</Col>
						</Link>
						<Link to="/maths/division" className="link">
							<Col className="box-4">
								<p className="text">÷</p>
							</Col>
						</Link>
					</div>
				</Container>
			</body>
		);
	}
}

export default Mathsview;
