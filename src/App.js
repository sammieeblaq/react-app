import React, { Component } from "react";
import "./App.css"



class App extends Component {

    render() {
        const app = {
            title: "Indecision App",
            subtitle: "Put your life in the hands of a computer",
            options: []
        }
        
        const onFormSubmit = e => {
            e.preventDefault();
            const option = e.target.elements.option.value;
            if (option) {
                app.options.push(option);
                e.target.elements.option.value = "";
            }
        }

        const template = (
            <div>
                <h1>{ app.title }</h1>
                { app.subtitle && <p>{ app.subtitle }</p>}
                <p>{ app.options.length > 0 ? "Here are your options" : "No options" }</p>
                <p>{ app.options.length }</p>
                <ol>
                    <li>Item one</li>
                    <li>Item two</li>
                </ol>
                <form onSubmit={ onFormSubmit } >
                    <input type="text" name="option" />
                    <button>Add Option</button>
                </form>
            </div>
        )

        return (
            <div>
                <h1>{ template }</h1>
            </div>
        )
    }
}

export default App;