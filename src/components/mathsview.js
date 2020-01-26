import React, { Component } from 'react';
import { Container, Col } from 'react-grid-system';
import { Link } from 'react-router-dom';
import './styles/mathsview.css';

class Mathsview extends Component {
	render() {
		return (
			<div className="bg">
				<div className="header">
					<div>Valitse lasku!</div>
				</div>
				<div>
					<div className="row">
						<Link to="/addition" className="link">
							<button className="box-1">
								<p className="text">+</p>
							</button>
						</Link>
						<Link to="/subtraction" className="link">
							<button className="box-1">
								<p className="text">-</p>
							</button>
						</Link>
					</div>
					<div className="row">
						<Link to="/multiplication" className="link">
							<button className="box-1">
								<p className="text">x</p>
							</button>
						</Link>
						<Link to="/division" className="link">
							<button className="box-1">
								<p className="text">÷</p>
							</button>
						</Link>
					</div>
				</div>
			</div>
		);
	}
}

export default Mathsview;
