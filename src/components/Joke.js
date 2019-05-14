import React from "react"

const Joke = (props) => {
    return (
        <div>
            <h3 style={{ 
                display: !props.question && "none",
                color: !props.punchline && "orange"
                }}>
                Question: {props.question}
            </h3>
            <h3 style={{ 
                color: !props.question && "red",
                display: !props.punchline && "none" 
                }} >
            PunchLine: {props.punchline}
            </h3>
            <hr/>
        </div>
    );
}

export default Joke