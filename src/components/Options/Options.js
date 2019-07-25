import React, { Component } from 'react'
import Option from "./Option/Option";

class Options extends Component {

    handleRemoveAll = () => {
        alert("HandleRmoveAll")
    }

    render() {
        return (
            <div>
                <button onClick={ this.handleRemoveAll } >Remove All</button>
                {
                    this.props.options.map(option => <Option key={ option } optionText={ option } />)
                }
            </div>
        )
    }
}

export default Options;