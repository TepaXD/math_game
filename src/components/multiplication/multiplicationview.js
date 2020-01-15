import React, { Component } from 'react';
import { Container, Row, Col } from 'react-grid-system';
import { Button } from 'react-bootstrap';
import Multiplicationnum from './multiplicationnum';
import '../styles/difficulties.css';

class Multiplicationview extends Component {
	state = {
		difficulty: undefined,
	};

	constructor(props) {
		super(props);
		this.startMaths = this.startMaths.bind(this);
		this.resetDifficulty = this.resetDifficulty.bind(this);
	}

	startMaths(e) {
		this.setState({ difficulty: e.target.value });
	}

	resetDifficulty() {
		this.setState({ difficulty: undefined });
	}

	render() {
		var header;

		if (this.state.difficulty !== undefined) {
			header = <Multiplicationnum resetDifficulty={this.resetDifficulty} difficulty={this.state.difficulty} />;
		} else {
			header = <h1>Empty</h1>;
		}
		return (
			<div className="bg">
				{!this.state.difficulty ? (
					<Container>
						<Row className="header">
							<Col>Valitse taso!</Col>
						</Row>
						<Row className="difficulties">
							<Button className="easy" value="easy" onClick={this.startMaths}>
								Normaali
							</Button>

							<Button className="medium" value="medium" onClick={this.startMaths}>
								Haastava
							</Button>

							<Button className="hard" value="hard" onClick={this.startMaths}>
								Mestari
							</Button>
						</Row>
					</Container>
				) : (
					<Container className="container">
						<Row>{header}</Row>
					</Container>
				)}
			</div>
		);
	}
}
export default Multiplicationview;
