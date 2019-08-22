import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Item from '../Item'

class Todo extends Component {
  static propTypes = {
    todos: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired
    }).isRequired).isRequired,
    toggleTodo: PropTypes.func.isRequired
  }

  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick (e) {
    this.props.toggleTodo(e.target.key)
  }

  render () {
    return (
      <div>
        <ul>
          {
            this.props.todos.map(todo =>
              <Item key={todo.id} {...todo} onClick={this.handleClick}/>
            )
          }
        </ul>
      </div>

    )
  }
}

export default Todo