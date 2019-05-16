import React, { Component } from 'react'
import "./App.css"

class App extends Component {
    state = {
        count: 0
    }


    handleClick() {
        this.setState(prevState => {
            return (
                prevState.count += 1
            )
        })
    }

    render() {
        return (
            <div>
                <h1>{ this.state.count }</h1>
                <button onClick={ this.handleClick } >Change!</button>
            </div>
        )
    }
}

export default App;