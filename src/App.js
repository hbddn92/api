import React, { Component } from 'react';
import Header			from './container/Header';
import SideBarLeft		from './container/SideBarLeft';
import PageHome			from './container/PageHome';
import PageAndroid	  	from './container/PageAndroid';
import PageSchemaForm	from './container/PageSchemaForm';
import AppStore 		from './AppStore';
import { Provider } 	from 'react-redux';

import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";

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
			<Provider store={AppStore}>
				<Router>
					<div className="App">
						<Header openSidebar={this.state.openSidebar} clickToogleSideBar={this.clickToogleSideBar} />
						<SideBarLeft openSidebar={this.state.openSidebar} clickToogleSideBar={this.clickToogleSideBar}/>
						<Route exact path="/" component={PageHome} />
						<Route path="/android" component={PageAndroid}/>
						<Route path="/schemaForm" component={PageSchemaForm}/>
						<Route path="/schemaForm-2" component={PageSchemaForm}/>
					</div>
				</Router>
			</Provider>
		);
	}
}

export default App;
