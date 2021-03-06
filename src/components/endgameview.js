import React, { Component } from 'react';
import { Row, Col, Container } from 'react-grid-system';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './styles/endgame.css';

class Endgame extends Component {
	constructor(props) {
		super(props);
		this.message = '';
		this.checkScore = this.checkScore.bind(this);
	}

	checkScore() {
		if (this.props.score < 5) {
			this.message = 'Arr, harjoittele lisää ja pääset pitkälle!';
		} else if (this.props.score < 10) {
			this.message = 'Hyvin suoriuduttu rosvo! Jatka samaan mallin!';
		} else if (this.props.score < 15) {
			this.message = 'Vau! Olet oikea merten kauhu! Onneksi olkoon!';
		} else {
			this.message = 'Kautta Mustaparran, olet hurjin rosvo täällä päin!';
		}
	}

	render() {
		this.checkScore();
		return (
			<div className="endbg">
				<div className="result-card">
					<Row>
						<Col className="score">
							Tuloksesi oli {this.props.score} / 20{' '}
							<img src="https://www.iconpacks.net/icons/1/free-coin-icon-794-thumb.png" className="img" />
						</Col>
					</Row>

					<Row className="message">
						<Col>{this.message}</Col>
					</Row>
					<Row>
						<img
							src="https://www.freepngimg.com/thumb/parrot/37037-7-pirate-parrot-transparent-image.png
"
							className="img-parrot"
						/>
					</Row>

					<Row className="buttons">
						<button onClick={this.props.resetDifficulty} className="button">
							Vaihda tasoa
						</button>
						<button onClick={this.props.restartGame} className="button">
							Pelaa uudestaan
						</button>
						<button className="button">
							<Link to="/" className="button">
								Palaa valikkoon
							</Link>
						</button>
					</Row>
				</div>
			</div>
		);
	}
}

export default Endgame;
