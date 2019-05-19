import React, { Component } from 'react'
import './App.css'
import Conditional from "./Conditional"


class App extends Component {
    
    state = {
        isLoading: true
    }


    componentDidMount() {
        setTimeout(() => {
            this.setState({
                isLoading: false
            })
        }, 1500);
    }

    render() {
        return (
            <div>
                { this.state.isLoading ? <h1>Is Loading...</h1> : <Conditional /> }
            </div>
        )
    }
}

export default App;
