import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import { robots } from '../robots';
import './App.css';
import Scroll from '../components/Scroll';

class App extends Component {
	constructor(){
		super();
		this.state = {
			robots: robots,
			searchfield: ''
		}
	}
	onSearchChange = event => {
		this.setState({ searchfield: event.target.value })
	}

	render() {
		const { robots, searchfield} = this.state;
		const filteredRobots = robots.filter(robot => {
			return robot.name.toLowerCase().includes(searchfield.toLowerCase());
		});
		return(
			<div className = 'tc'>
				<h1 className = 'f1'>Robot Friends</h1>
				<SearchBox searchchange = {this.onSearchChange}/>
				<Scroll>
					<CardList robots = {filteredRobots } />
				</Scroll>	
			</div>
	)
	}
}

export default App;    