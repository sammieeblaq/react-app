import React from 'react'
import './App.css'
import Joke from "./components/Joke"
import jokesData from "./jokesData"

const App = () => {
	const jokeComponents = jokesData.map( joke => {
		return (
			<Joke 
				key={ joke.id } 
				question={ joke.question } 
				punchline={ joke.punchLine }
			/> 
		)
});
	return (
		<div>
			{ jokeComponents }
		</div>
	)
}

export default App;
