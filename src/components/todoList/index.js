import React, { Component } from 'react'
import VisibleTodo from '../container/visibleTodo'
import AddTodo from '../container/addTodo'
import Footer from '../Footer'

class TodoList extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div>
        <AddTodo/>
        <VisibleTodo />
        <Footer/>
      </div>
    )
  }
}

export default TodoList