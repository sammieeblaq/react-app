import React, { Component } from 'react';
import Header from "../Header/Header";
import Options from "../Options/Options";
import Action from "../Action/Action";
import AddOption from "../AddOption/AddOption";


class IndecisionApp extends Component {

    render() {
        const title = "Indecision App";
        const subtitle = "Put your life in the hands of a computer";
        const options = ["Thing One", "Thing Two", "Thing Three"];

        return (
            <div>
                <Header title={ title } subtitle={ subtitle } />
                <Action />
                <Options options={ options } />
                <AddOption />
            </div>
        )
    }
}

export default IndecisionApp;