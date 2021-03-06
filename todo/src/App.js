import React, { Component } from 'react';
import './App.css';
import Todos from './components/Todos';
import Header from './components/Layout/Header'
import AddTodo from './components/AddTodo'

export default class App extends Component {

  state = {
    todos: [
      {
        id: 1,
        title: 'Take out the trash',
        completed: false
      },
      {
        id: 2,
        title: 'Make dinner',
        completed: false
      },
      {
        id: 3,
        title: 'Meeting with Santa',
        completed: false
      },
    ]
  }

  // Toggle Completed
  markComplete = (id) => {
    this.setState({ todos: this.state.todos.map( todo => {
      if(todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo
    })});
  }

  // Delete Todo
  delTodo = (id) => {
    this.setState({ todos: [...this.state.todos.filter(todo=> todo.id !== id)] })
  }

  render() {
    console.log(this.state.todos)
    return (
      <div>
        <Header />
        <AddTodo />
        <Todos 
          todos={this.state.todos}
          markComplete={this.markComplete}
          delTodo={this.delTodo} 
        />
      </div>
    )
  }
}


