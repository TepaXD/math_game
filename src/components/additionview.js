import React, { Component } from 'react';
import { Container, Row, Col } from 'react-grid-system';
import { Button } from 'react-bootstrap';
import '../styles/difficulties.css';

class Additionview extends Component {
	state = {
		difficulty: undefined,
	};

	constructor(props) {
		super(props);
		this.startMaths = this.startMaths.bind(this);
	}

	startMaths(e) {
		this.setState({ difficulty: e.target.value });
		if (e.target.value === 'easy') {
			this.setState({ difficulty: e.target.value });
			alert(this.state.difficulty);
		} else if (e.target.value === 'medium') {
			this.setState({ difficulty: e.target.value });
		} else if (e.target.value === 'hard') {
			this.setState({ difficulty: e.target.value });
		}
	}

	render() {
		return (
			<body className="bg">
				<Container className="container">
					<Row className="header">
						<Col>Valitse taso!</Col>
					</Row>
					<Row className="difficulties">
						<Button className="easy" value="easy" onClick={this.startMaths}>
							Helppo
						</Button>
						<Button className="medium" value="medium" onClick={this.startMaths}>
							Haastava
						</Button>
						<Button className="hard" value="hard" onClick={this.startMaths}>
							Mestari!
						</Button>
					</Row>
					<Row></Row>
				</Container>
			</body>
		);
	}
}
export default Additionview;
