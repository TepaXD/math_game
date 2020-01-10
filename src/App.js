import React, { Component } from 'react';
import Mynav from './components/mynavbar';
import Mathsview from './components/mathsview';

class App extends Component {
	render() {
		return (
			<body>
				<Mynav />
				<Mathsview />
			</body>
		);
	}
}
export default App;
