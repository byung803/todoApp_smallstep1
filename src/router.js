import React, { Component } from 'react';
import AddTodo from './containers/AddTodo';
import TodoList from './components/TodoList';

class Router extends Component {
    render() {
        return (
            <div>
                <AddTodo />
                <TodoList />
            </div>
        );
    }
}

export default Router; 
