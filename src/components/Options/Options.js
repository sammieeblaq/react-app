import React from 'react';
import Option from "./Option/Option";

const Options = props => (
    <div>
        <div className="widget-header">
            <h3 className="widget-header__title">Your Options</h3>
            <button
                className="button button--link"
                onClick={ props.handleDeleteOptions } 
            >
                Remove All
            </button>
        </div>
        { props.options.length === 0 && <p className="widget-header__message">Please Enter an option!!!</p> }
        {
            props.options.map(option => (
                <Option 
                    key={ option } 
                    optionText={ option }
                    handleDeleteOption={ props.handleDeleteOption }
                />)
            )
        }
    </div>
)

export default Options;