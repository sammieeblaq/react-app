import React, { Component } from 'react'
import './App.css'

class App extends Component {
    state = {
		loading: false,
		character: {}
	}

	componentDidMount() {
        this.setState({ loading: true })
        
		fetch("https://swapi.co/api/people/1")
			.then(result => result.json())
			.then(data => {
				this.setState({
					loading: !this.state.loading,
					character: data
				})
			})
	}

	render() {
		const text = this.state.loading ? "Loading..." : this.state.character.name
		return (
			<div>
				{ text }
			</div>
		)
	}
}

export default App;
