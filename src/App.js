import React, { Component } from 'react'
import "./App.css"

class App extends Component {
	state = {
		name: "Sally",
		age: 34
	}

	render() {
		return (
			<div>
				<h1>{ this.state.name }</h1>
				<h3>{ this.state.age } years old!</h3>
			</div>
		)
	}
}

export default App