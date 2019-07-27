import React from 'react';


const Option = props => {
    return (
        <div>
            { props.optionText }
            <button onClick={(e) => props.handleDeleteOption}>
                Remove
            </button>
        </div>
    )
}

export default Option;