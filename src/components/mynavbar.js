import React, { Component } from 'react';
import { Navbar, NavItem, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import './styles/mynavbar.css';
import song from './audio/song.mp3';

class Mynav extends Component {
	state = {
		music: 'off',
	};

	constructor(props) {
		super(props);
		this.playMusic = this.playMusic.bind(this);
	}

	playMusic() {
		var music = this.state.music;
		if (music === 'on') {
			this.setState({ music: 'off' });
		} else {
			this.setState({ music: 'on' });
		}
	}

	render() {
		var audio;
		if (this.state.music === 'on') {
			audio = (
				<Button onClick={this.playMusic} className="navbutton">
					<img src="https://static.thenounproject.com/png/86475-200.png" className="img" />
					<audio autoplay="autoplay" loop="loop" id="songplayer" volume="0.2">
						<source src={song} type="audio/mpeg"></source>
					</audio>
				</Button>
			);
		} else {
			audio = (
				<Button onClick={this.playMusic} className="navbutton">
					<img src="https://static.thenounproject.com/png/86474-200.png" className="img" />{' '}
				</Button>
			);
		}
		return (
			<Navbar className="navbar mynav">
				<Link to="/" className="navbrand">
					Merirosvomatikkaa
				</Link>

				<Nav className="ml-auto">
					<Nav className="navbar-item-container">
						<NavItem>{audio}</NavItem>
					</Nav>
				</Nav>
			</Navbar>
		);
	}
}

export default Mynav;
