import React, { Component } from "react";
import "./App.css";

class App extends Component {
    state = {
        firstName: "",
        lastName: ""
    }

    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        })
    }

    render() {
        return (
            <form action="">
                <input 
                    value={ this.state.firstName }
                    name="firstName"
                    placeholder="First Name" 
                    onChange={ this.handleChange } 
                />
                <br/>
                <input
                    value={ this.state.lastName }
                    name="lastName"
                    placeholder="Last Name" 
                    onChange={ this.handleChange } 
                />
            </form>
        )
    }
}

export default App;