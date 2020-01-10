import React, { Component } from 'react';
import { Container, Row, Col } from 'react-grid-system';

import '../styles/mathsview.css';

class Mathsview extends Component {
	render() {
		return (
			<div className="bg">
				<Container className="container">
					<Row className="row">
						<Col className="box">1</Col>
						<Col className="triangle">2</Col>
					</Row>
					<Row>
						<Col className="diamond">3</Col>
						<Col className="circle">4</Col>
					</Row>
				</Container>
			</div>
		);
	}
}

export default Mathsview;
