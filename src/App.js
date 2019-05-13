import React from 'react'
import './App.css'
import Joke from "./components/Joke"

const App = () => {
	return (
		<div>
			<Joke punchline="Hello there" />
			<Joke question="Who are you" punchline="I am nobody" />
			<Joke punchline="God oo" />
			<Joke question="who is you" punchline="This is me" />
			<Joke punchline="I am here" />
		</div>
	)
}

export default App;
