import React, { Component } from 'react';
import Header from "../Header/Header";
import Options from "../Options/Options";
import Action from "../Action/Action";
import AddOption from "../AddOption/AddOption";


class IndecisionApp extends Component {

    state = {
        options: []
    }



    handleDeleteOptions = () => {
        this.setState(() => ({ options: [] }))
    }

    handleDeleteOption = (optionToRemove) => {
        this.setState(prevState => {
            options: prevState.options.filter(option => {
                return optionToRemove !== option;
            })
        })
    }
    

    handlePick = () => {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        alert(option)
    }


    handleAddOption = option => {
        if (!option) {
            return "Enter valid value to item"
        } else if (this.state.options.indexOf(option) > -1) {
            return "This option already exists"
        }

        this.setState(prevState => ({ options: prevState.options.concat(option) }))
    }


    render() {
        const subtitle = "Put your life in the hands of a computer";

        return (

            <div>
                <Header subtitle={ subtitle } />
                <Action 
                    hasOptions={ this.state.options.length > 0 } 
                    handlePick={ this.handlePick }
                />
                <Options 
                    options={ this.state.options } 
                    handleDeleteOptions={ this.handleDeleteOptions }
                    handleDeleteOption={ this.handleDeleteOption }
                />
                <AddOption
                    handleAddOption={ this.handleAddOption }
                />
            </div>
        )
    }
}


export default IndecisionApp;