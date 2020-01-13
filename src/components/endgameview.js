import React, { Component } from 'react';
import { Container, Row, Col } from 'react-grid-system';
import { Button } from 'react-bootstrap';
import '../styles/endgame.css';

class Endgame extends Component {
	alertF() {
		alert(this.props.props.correctans);
	}
	render() {
		return (
			<div>
				<Container className="result-card">
					<Row>
						<Col>MOI!</Col>
					</Row>
					<Row>
						<Button onClick={this.props.resetDifficulty}>Vaihda tasoa</Button>
						<Button onClick={this.props.restartGame}>Pelaa uudestaan</Button>
					</Row>
				</Container>
			</div>
		);
	}
}

export default Endgame;
