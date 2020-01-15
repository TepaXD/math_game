import React, { Component } from 'react';
import { Container, Row, Col } from 'react-grid-system';
import { Button } from 'react-bootstrap';
import Additionnum from './additionnum';
import '../styles/difficulties.css';

class Additionview extends Component {
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
			header = <Additionnum resetDifficulty={this.resetDifficulty} difficulty={this.state.difficulty} />;
		} else {
			header = <h1>Empty</h1>;
		}

		return (
			<div className="bg">
				{!this.state.difficulty ? (
					<Container>
						<Row className="diffheader">
							<Col>Valitse taso!</Col>
						</Row>
						<Row className="difficulties">
							<button className="easy" value="easy" onClick={this.startMaths}>
								Normaali
							</button>

							<button className="medium" value="medium" onClick={this.startMaths}>
								Haastava
							</button>

							<button className="hard" value="hard" onClick={this.startMaths}>
								Mestari
							</button>
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
export default Additionview;
