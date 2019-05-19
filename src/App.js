import React, { Component } from 'react'
import './App.css'



class App extends Component {
    
    state = {
        loggedIn: true
    }


    clickHandler = () => {
        this.setState(prevState => {
            return {
                loggedIn: !prevState.loggedIn
            }
        })
    }

    render() {
        let buttonText = this.state.loggedIn ? "Log out" : "Log in"
        let displayText = this.state.loggedIn ? "Logged In" : "Logged Out"
        return (
            <div>
                <h1>You are { displayText }</h1>
                <button onClick={ this.clickHandler }>{ buttonText }</button>
            </div>
        )
    }
}

export default App;
