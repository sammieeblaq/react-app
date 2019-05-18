import React, { Component } from "react"
import "./App.css"

class App extends Component {
	state = {
		count: 0
	}

	handleClick = () => {
		this.setState(prevState => {
			return {
				count: prevState.count + 3
			}
		})
	}


	render() {
		return (
			<div>
				<h1>{ this.state.count }</h1>
				<button onClick={ this.handleClick }>Hit Me!!!</button>
			</div>
		)
	}
}


export default App