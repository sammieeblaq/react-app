import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import App from './App';



ReactDOM.render(<App />, document.getElementById("root"));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

// class Counter extends Component {

//     state = {
//         count: 0
//     }


//     handleAddOne = () => {
//         this.setState(prevState => {
//             return {
//                 count: prevState.count + 1
//             }
//         })
//     }

//     handleMinusOne = () => {
//         this.setState(prevState => {
//             return {
//                 count: prevState.count - 1
//             }
//         })
//     }

//     handleReset = () => {
//         this.setState(() => {
//             return {
//                 count: 0
//             }
//         })
//     }


//     render() {
//         return (
//             <div>
//                 <h1>Count: { this.state.count }</h1>
//                 <button onClick={ this.handleAddOne }>+1</button>
//                 <button onClick={ this.handleMinusOne }>-1</button>
//                 <button onClick={ this.handleReset }>reset</button>
//             </div>
//         )
//     }
// }
// ReactDOM.render(<Counter />, document.getElementById("root"));


// class VisibilityToggle extends Component {

//     state = {
//         visibility: false
//     }

//     toggleVisibility = () => {
//         this.setState(prevState => {
//             return {
//                 visibility: !prevState.visibility
//             }
//         })
//     }

//     render() {
//         const app = {
//             title: "Visibility Toogle",
//             subtitle: "There are some things you can now see"
//         }
//         return (
//             <div>
//                 <h1>{ app.title }</h1>
//                 <button onClick={ this.toggleVisibility }>{ !this.state.visibility ? "Show details" : "Hide details" }</button>
//                 <p hidden={ !this.state.visibility } >{ app.subtitle }</p>
//             </div>
//         )
//     }

// }

// ReactDOM.render(<VisibilityToggle />, document.getElementById("root"));