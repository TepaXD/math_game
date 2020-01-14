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
		if (e.target.value === 'easy') {
			this.setState({ difficulty: e.target.value });
		} else if (e.target.value === 'medium') {
			this.setState({ difficulty: e.target.value });
		} else if (e.target.value === 'hard') {
			this.setState({ difficulty: e.target.value });
		}
	}

	resetDifficulty() {
		this.setState({ difficulty: undefined });
	}

	render() {
		var header;

		if (this.state.difficulty === 'easy') {
			header = <Multiplicationnum resetDifficulty={this.resetDifficulty} difficulty={this.state.difficulty} />;
		} else if (this.state.difficulty === 'medium') {
			header = <h1>Medium</h1>;
		} else if (this.state.difficulty === 'hard') {
			header = <h1>Hard</h1>;
		} else {
			header = <h1>Empty</h1>;
		}
		return (
			<body className="bg">
				{!this.state.difficulty ? (
					<Container className="container">
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
			</body>
		);
	}
}
export default Multiplicationview;
