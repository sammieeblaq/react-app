import React, { Component } from 'react';
import Header from "../Header/Header";
import Options from "../Options/Options";
import Action from "../Action/Action";
import AddOption from "../AddOption/AddOption";
import OptionModal from '../OptionModal/OptonModal';


class IndecisionApp extends Component {

    state = {
        options: [],
        selectedOption: undefined
    }

    
    componentDidMount = () => {

        try {
            const readJson = localStorage.getItem("options");
            const options = JSON.parse(readJson);

            if (options) {
                this.setState(() => ({ options: options }))
            }
        } catch (error) {
            // Do nothing at all.
        }
    }

    componentDidUpdate = (prevProps, prevState) => {
        if (prevState.options.length !== this.state.options.length) {
            const writeJson = JSON.stringify(this.state.options);
            localStorage.setItem("options", writeJson);
        }
    }

    // componentWillUnmount = () => {
    //     console.log("componentWillUnmount");
    // }


    handleDeleteOptions = () => {
        this.setState(() => ({ options: [] }))
    }


    handleDeleteOption = optionToRemove => {
        this.setState(prevState => ({
            options: prevState.options.filter(option => {
                return optionToRemove !== option;
            })
        }))
    }
    

    handlePick = () => {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        this.setState(() => ({ selectedOption: option }))
    }


    handleAddOption = option => {
        if (!option) {
            return "Enter valid value to item"
        } else if (this.state.options.indexOf(option) > -1) {
            return "This option already exists"
        }

        this.setState(prevState => ({ options: prevState.options.concat(option) }))
    }

    clearSelectedOption = () => {
        this.setState(() => ({ selectedOption: undefined }))
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
                <OptionModal
                    selectedOption={ this.state.selectedOption }
                    clearSelectedOption={ this.clearSelectedOption }
                />
            </div>
        )
    }
}

export default IndecisionApp;