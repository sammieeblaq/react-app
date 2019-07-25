import React, { Component } from "react";
import "./App.css";
import IndecisionApp from "./components/IndecisionApp/IndecisionApp";
// import Header from "./components/Header/Header";
// import Action from "./components/Action/Action";
// import Options from "./components/Options/Options";
// import AddOption from "./components/AddOption/AddOption";

class App extends Component {

    render() {
        return (
            <div>
                <IndecisionApp />
            </div>
        )
    }
}

export default App;