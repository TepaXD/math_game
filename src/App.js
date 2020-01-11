import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Mynav from './components/mynavbar';
import Mathsview from './components/mathsview';
import Additionview from './components/additionview';

class App extends Component {
	render() {
		return (
			<Router>
				<Mynav />
				<Switch>
					<Route exact path="/maths" component={Mathsview} />
					<Switch>
						<Route exact path="/maths/addition" component={Additionview} />
					</Switch>
				</Switch>
			</Router>
		);
	}
}
export default App;
