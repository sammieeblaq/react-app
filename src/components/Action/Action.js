import React, { Component } from "react";

class Action extends Component {


    handlePick = () => {
        alert("handlePick");
    }

    render() {
        return (
            <div>
                <button onClick={ this.handlePick }>What should I do???.</button>
            </div>
        )
    }
}

export default Action;