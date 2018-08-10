import React, { Component } from 'react';
import Header_1	from './container/Header_1';
import SideBarLeft	from './container/SideBarLeft';
import PageHome		from './container/PageHome';
import PageAndroid		from './container/PageAndroid';

import Button from '@material-ui/core/Button';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends Component {
	constructor(props) {
		super(props)
		this.clickToogle = this.clickToogle.bind(this);
		this.state={
			openSidebar: true
		}
	}

	clickToogle() {
		this.setState({openSidebar: !this.state.openSidebar})
	}

	render() {
		return (
			<Router>
				<div className="App">
					<Header_1 clickToogle={this.clickToogle}/>
					<SideBarLeft openSidebar={this.state.openSidebar}/>
					<Route exact path="/" component={PageHome} />
					<Route path="/android" component={PageAndroid}/>
				</div>
			</Router>
		);
	}
}

export default App;
