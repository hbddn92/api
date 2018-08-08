import React, { Component } from 'react';
import logo 			from './logo.svg';
import './App.css';
import SideBarTitle 		from './components/SideBarTitle';
import SideBarSub 	from './components/SideBarSub';
import SideBarToogle from './components/SideBarToogle';
import SideBar	from './components/SideBar';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
);

const About = () => (
  <div>
    <h2>About</h2>
  </div>
);

class App extends Component {
	render() {
		return (
			<Router >
				<div className="App">
					<header className="App-header">
						<img src={logo} className="App-logo" alt="logo" />
						<h1 className="App-title">Welcome to SideBar</h1>
					</header>
					<SideBar>
						<SideBarToogle />
							<SideBarSub>
								<SideBarTitle icon={'fas fa-atlas'} pathPage={'/'}>Home</SideBarTitle>
							</SideBarSub>

							<SideBarSub>
								<SideBarTitle icon={'fas fa-atlas'} pathPage={'/about'}>About</SideBarTitle>
							</SideBarSub>

							<SideBarSub>
								<SideBarTitle icon={'far fa-address-book'}>Address Book</SideBarTitle>
							</SideBarSub>

							<SideBarSub>
								<SideBarTitle icon={'fab fa-algolia'}>Algolia</SideBarTitle>
							</SideBarSub>

							<SideBarSub hasChild={true}>
								<SideBarTitle icon={'fas fa-atlas'} hasChild={true}>Link6666666</SideBarTitle>
								<SideBarSub>
									<SideBarTitle icon={'fas fa-algolia'}>Link88881111</SideBarTitle>
								</SideBarSub>
								<SideBarSub>
									<SideBarTitle icon={'fas fa-algolia'}>Link88881111</SideBarTitle>
								</SideBarSub>
							</SideBarSub>
							
							<SideBarSub hasChild={true}>
								<SideBarTitle icon={'far fa-address-book'} hasChild={true}>Link7272</SideBarTitle>
								<SideBarSub>
									<SideBarTitle icon={'fas fa-brain'}>Link88881111</SideBarTitle>
								</SideBarSub>
								<SideBarSub>
									<SideBarTitle icon={'fas fa-brain'}>Link88882222</SideBarTitle>
								</SideBarSub>
								<SideBarSub hasChild={true}>
									<SideBarTitle icon={'fas fa-brain'} hasChild={true}>LinkTrue</SideBarTitle>
									<SideBarSub>
										<SideBarTitle icon={'fas fa-brain'}>LinkTrue1111</SideBarTitle>
									</SideBarSub>
									<SideBarSub>
										<SideBarTitle icon={'fas fa-brain'}>LinkTrue2222</SideBarTitle>
									</SideBarSub>
								</SideBarSub>
							</SideBarSub>
					</SideBar>
					<Route exact path="/" component={Home} />
					<Route path="/about" component={About} />
				</div>
			</Router>
		);
	}
}

export default App;
