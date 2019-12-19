import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class TodoItem extends Component {

    getStyle = () => {
        return {
            backgroundColor: '#9c9c9c',
            padding: '10px',
            borderBottom: '3px #ccc solid', 
            textDecoration: this.props.todo.completed ? 'line-through' : 'none'
        }
    }



    render() {

        const { id, title } = this.props.todo;

        return (
            <div style={this.getStyle()}>
                <p>
                    <input type='checkbox' onChange={this.props.markComplete.bind(this, id)}/> {' '}
                    { title }
                    <button style={btnStyle} onClick={this.props.delTodo.bind(this, id)}>x</button>
                </p>
            </div>
        )
    }
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
}

const btnStyle = {
    backgroundColor: '#ff0000',
    color: '#fff',
    border: 'none',
    padding: '5px 10px',
    borderRadius: '50%',
    cursor: 'pointer',
    float: 'right'
}

export default TodoItem
