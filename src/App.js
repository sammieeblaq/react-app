import React, { Component } from 'react'

function handleClick() {
    console.log("I was clicked")
}

class App extends Component {
    state = {

    }
    render() {
        return (
            <div>
                <p>Hello World</p>
                <br/>
                <button onClick={ handleClick }>Click Me</button>
            </div>
        )
    }
}

export default App;