import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Mynav from './components/mynavbar';
import Mathsview from './components/mathsview';
import Additionview from './components/addition/additionview';
import Divisionview from './components/division/divisionview';
import Subtractionview from './components/subtraction/subtractionview';
import Multiplicationview from './components/multiplication/multiplicationview';

class App extends Component {
	render() {
		return (
			<Router>
				<Mynav />
				<Switch>
					<Route exact path="/" component={Mathsview} />
					<Route exact path="/addition" component={Additionview} />
					<Route exact path="/division" component={Divisionview} />
					<Route exact path="/subtraction" component={Subtractionview} />
					<Route exact path="/multiplication" component={Multiplicationview} />
				</Switch>
			</Router>
		);
	}
}
export default App;
