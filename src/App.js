import React, { Component } from 'react';
import Header_1			from './container/Header_1';
import SideBarLeft		from './container/SideBarLeft';
import PageHome			from './container/PageHome';
import PageAndroid	  	from './container/PageAndroid';
import PageAndroid1	  	from './container/PageAndroid-1.jsx';
import PageSchemaForm	from './container/PageSchemaForm';

import Button from '@material-ui/core/Button';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends Component {
	constructor(props) {
		super(props)
		this.clickToogleSideBar = this.clickToogleSideBar.bind(this);
		this.state={
			openSidebar: true
		}
	}

	clickToogleSideBar() {
		this.setState({openSidebar: !this.state.openSidebar})
	}

	render() {
		return (
			<Router>
				<div className="App">
					<Header_1 openSidebar={this.state.openSidebar} clickToogleSideBar={this.clickToogleSideBar} />
					<SideBarLeft openSidebar={this.state.openSidebar} clickToogleSideBar={this.clickToogleSideBar}/>
					<Route exact path="/" component={PageHome} />
					<Route path="/android" component={PageAndroid}/>
					<Route path="/schemaForm" component={PageSchemaForm}/>
				</div>
			</Router>
		);
	}
}

export default App;
