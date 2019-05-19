import React, { Component } from 'react'
import './App.css';
import todosData from "./todoData"
import TodoItem from "./components/TodoItem/TodoItem"


class App extends Component {
    state = {
        todos: todosData
    }

    handleChange = (id) => {
        
    }

	render() {
        const todoComponent = this.state.todos.map(task => <TodoItem key={ task.id } todo={ task } /> )

        return (
            <div className="todo-list">
                { todoComponent }
            </div>
        )
    }
}

export default App;
