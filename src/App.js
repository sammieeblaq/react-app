import React, { Component } from "react";
import "./App.css";

class App extends Component {
    state = {
        firstName: "",
        lastName: "",
        isFriendly: true,
        gender: "",
        favColor: ""
    }

    handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        type === "checkbox" ? this.setState({ [name]: checked }) : this.setState({ [name]: value })
    }

    render() {
        return (
            <form>
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
                
                <br/>
                <textarea
                    value={"some default value"}
                    onChange={ this.handleChange }
                />
                <br/>
                <label>
                    Is Friendly
                    <input
                        type="checkbox"
                        name="isFriendly"
                        checked={ this.state.isFriendly }
                        onChange={ this.handleChange }
                    />
                </label>
                <br/>
                <label>
                    Male
                    <input
                        type="radio"
                        name="gender"
                        value="male"
                        checked={ this.state.gender === "male" }
                        onChange={ this.handleChange }
                    />
                </label>
                <br/>
                <label>
                    Female
                    <input
                        type="radio"
                        name="gender"
                        value="female"
                        checked={ this.state.gender === "female" }
                        onChange={ this.handleChange }              
                    />
                </label>
                <br/>
                <select 
                    value={ this.state.favColor }
                    onChange={ this.handleChange }
                    name="favColor"
                >
                    <option value="blue">Blue</option>
                    <option value="green">Green</option>
                    <option value="yellow">Yellow</option>
                    <option value="red">Red</option>
                    <option value="orange">Orange</option>
                </select>
                <button>Submit</button>
            </form>
        )
    }
}

export default App;