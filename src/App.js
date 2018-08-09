import React, { Component } from 'react';
import logo 			from './logo.svg';
import SideBarLeft	from './container/SideBarLeft';
import PageHome		from './container/PageHome';
import PageAbout		from './container/PageAbout';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends Component {
	render() {
		return (
			<Router >
				<div className="App">
					<header className="App-header">
						<img src={logo} className="App-logo" alt="logo" />
						<h1 className="App-title">Welcome to </h1>
					</header>
					<SideBarLeft />
					<Route exact path="/" component={PageHome} />
					<Route path="/about" component={PageAbout} />
				</div>
			</Router>
		);
	}
}

export default App;
