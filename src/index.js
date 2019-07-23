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

// const app = {
//     title: "Indecision App",
//     subtitle: "Put your life in the hands of a computer",
//     options: []
// }

// const onFormSubmit = e => {
//     e.preventDefault();

//     const option = e.target.elements.option.value;

//     if (option) {
//         app.options.push(option);
//         e.target.elements.option.value = "";
//         render();
//     }
// }

// const removeAll = () => {
//     app.options = [];
//     render();
// }

// const onMakeDecision = () => {
//     const randomNum = Math.floor(Math.random() * app.options.length);
//     const option = app.options[randomNum];
//     alert(option);
// }

// const render = () => {
//     console.log("App.js is running")

//     const template = (
//         <div>
//             <h1>{ app.title }</h1>
//             { app.subtitle && <p>{ app.subtitle }</p>}
//             <p>{ app.options.length > 0 ? "Here are your options" : "No options" }</p>

//             <button disabled={ app.options.length === 0 } onClick={ onMakeDecision }>What should I do????</button>
//             <button onClick={ removeAll }>Remove All</button>

//             <ol>
//                 { app.options.map(option => <li key={ option }>{ option }</li>) }
//             </ol>
//             <form onSubmit={ onFormSubmit }>
//                 <input type="text" name="option" />
//                 <button>Add Option</button>
//             </form>
//         </div>
//     )

//     ReactDOM.render(template, document.getElementById('root'));
// }

// render();


// let visibility = false;
// const app = {
//     title: "Visibility Toggle",
//     details: "These are some details you can see!!!"
// }

// const toggleVisibility = () => {
//     visibility = !visibility
//     render();
// }

// const render = () => {
//     const template = (
//         <div>
//             <h1>{ app.title }</h1>
//             <button onClick={ toggleVisibility }>{ visibility ? "HIde details" : "Show details" }</button>
//             <p hidden={ !visibility }>{ app.details }</p>
//         </div>
//     )

//     ReactDOM.render(template, document.getElementById("root"));
// }
// render();