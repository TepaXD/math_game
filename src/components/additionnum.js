import React, { Component } from 'react';
import { Container, Row, Col } from 'react-grid-system';
import { Button } from 'react-bootstrap';
import Endgame from './endgameview';
import '../styles/numbers.css';

class Additionnum extends Component {
	state = {
		correctans: 0,
		wrongans: 0,
		endgame: false,
	};
	constructor(props) {
		super(props);
		this.num1 = 0;
		this.num2 = 0;
		this.answer = 0;
		this.fakeans1 = 0;
		this.fakeans2 = 0;
		this.realans = 0;
		this.counter = 1;

		this.submitAnswer = this.submitAnswer.bind(this);
		this.restartGame = this.restartGame.bind(this);
	}

	getRandom(min, max) {
		return Math.floor(Math.random() * (max - min)) + min;
	}

	randomizeOrder(fakeans1, fakeans2, answer) {
		let x = this.getRandom(1, 4);
		let temp;
		if (x === 1) {
			temp = fakeans1;
			return {
				fakeans1: (fakeans1 = fakeans2),
				fakeans2: (fakeans2 = answer),
				answer: (answer = temp),
			};
		} else if (x === 2) {
			temp = fakeans1;
			return {
				fakeans1: (fakeans1 = answer),
				answer: (answer = fakeans2),
				fakeans2: (fakeans2 = temp),
			};
		} else if (x === 3) {
			return {
				fakeans1: fakeans1,
				fakeans2: fakeans2,
				answer: answer,
			};
		}
	}

	getAnswer() {
		let x = 1;
		let rem;
		if (x === 1) {
			this.num1 = this.getRandom(1, 11);
			this.num2 = this.getRandom(1, 11);
			this.answer = this.num1 + this.num2;
			this.realans = this.answer;
		} else if (x === 2) {
			this.num1 = this.getRandom(1, 11);
			this.num2 = this.getRandom(1, 5);
			while (this.num1 < this.num2) {
				this.num2 = this.getRandom(1, 5);
			}
			this.answer = this.num1 - this.num2;
		} else if (x === 3) {
			this.num1 = this.getRandom(1, 5);
			this.num2 = this.getRandom(1, 4);
			this.answer = this.num1 * this.num2;
		} else if (x === 4) {
			this.num1 = this.getRandom(1, 20);
			this.num2 = this.getRandom(1, 10);
			rem = this.num1 % this.num2;
			while (rem !== 0) {
				this.num1 = this.getRandom(1, 21);
				this.num2 = this.getRandom(1, 11);
				rem = this.num1 % this.num2;
			}
			this.answer = this.num1 / this.num2;
		}

		this.fakeans1 = this.getRandom(this.answer - this.getRandom(0, 9), this.answer + this.getRandom(1, 9));
		this.fakeans2 = this.getRandom(this.answer - this.getRandom(1, 11), this.answer + this.getRandom(1, 11));
		while (this.fakeans1 === this.answer || this.fakeans1 < 0) {
			this.fakeans1 = this.getRandom(this.answer - this.getRandom(0, 9), this.answer + this.getRandom(1, 9));
		}
		while (this.fakeans2 === this.answer || this.fakeans2 < 0) {
			this.fakeans2 = this.getRandom(this.answer - this.getRandom(0, 9), this.answer + this.getRandom(1, 9));
		}
		while (this.fakeans2 === this.answer || this.fakeans2 < 0) {
			this.fakeans2 = this.getRandom(this.answer - this.getRandom(0, 11), this.answer + this.getRandom(1, 11));
		}
		while (this.fakeans2 === this.fakeans1 || this.fakeans2 < 0) {
			this.fakeans2 = this.getRandom(this.answer - this.getRandom(0, 11), this.answer + this.getRandom(1, 11));
		}
		let numbers = this.randomizeOrder(this.fakeans1, this.fakeans2, this.answer);
		return {
			num1: this.num1,
			num2: this.num2,
			answer: numbers.answer,
			fakeans1: numbers.fakeans1,
			fakeans2: numbers.fakeans2,
		};
	}

	submitAnswer(e) {
		if (this.counter === 20) {
			this.setState({ endgame: true });
		} else {
			this.counter = this.counter + 1;
		}

		var audio = new Audio('http://wohlsoft.ru/docs/Sounds/SMBX_OPL/SMBX_OPL_Sounds_src/WAV/coin.wav');
		Button.classList += ' correct';
		if (e.target.value == this.realans) {
			this.setState({ correctans: this.state.correctans + 1 });
			audio.play();
		} else {
			this.setState({ wrongans: this.state.wrongans + 1 });
		}
	}

	restartGame() {
		this.setState({
			endgame: false,
		});
		this.counter = 1;
		this.setState({ correctans: 0 });
	}

	props = {
		correct: this.state.correctans,
		restartGame: this.restartGame,
		difficulty: this.props.resetDifficulty,
	};

	render() {
		let data = this.getAnswer();
		var view = <Endgame restartGame={this.restartGame} resetDifficulty={this.props.resetDifficulty} />;

		return (
			<div>
				{!this.state.endgame ? (
					<Container>
						<Container className="container">
							<Row className="header-num">
								<Col>Valitse oikea vastaus saadaksesi pisteitä!</Col>
							</Row>
							<Row>
								<Col>
									<Button onClick={this.props.resetDifficulty} className="back-button">
										Takaisin
									</Button>
									<img
										img
										src="https://www.iconpacks.net/icons/1/free-coin-icon-794-thumb.png"
										className="img"
									/>
									{this.state.correctans}
									<h1>{this.counter}/20</h1>
								</Col>
							</Row>
						</Container>
						<Container className="numbg">
							<Row className="equation">
								<Col>
									{data.num1}+{data.num2}=
								</Col>
							</Row>
							<Row>
								<Col>
									<Button className="answers" value={data.answer} onClick={this.submitAnswer}>
										{data.answer}
									</Button>
								</Col>
								<Col>
									<Button className="answers" value={data.fakeans1} onClick={this.submitAnswer}>
										{data.fakeans1}
									</Button>
								</Col>
								<Col>
									<Button className="answers" value={data.fakeans2} onClick={this.submitAnswer}>
										{data.fakeans2}
									</Button>
								</Col>
							</Row>
						</Container>
					</Container>
				) : (
					<Container>{view}</Container>
				)}
			</div>
		);
	}
}

export default Additionnum;
