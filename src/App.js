import React, { Component } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import { robots } from './robots';

class App extends Component {
	constructor(){
		super();
		this.state = {
			robots: robots,
			searchfield: ''
		}
	}

	onSearchChange = (event) => {
		console.log(event);
	}

	render() {
		return(
			<div className = 'tc'>
				<h1>Robot Friends</h1>
				<SearchBox searchchange = {this.state.onSearchChange}/>
				<CardList robots = {this.state.robots} />
			</div>
	)
	}
}

export default App;  