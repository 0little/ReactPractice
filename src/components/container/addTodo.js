// import { connect } from 'react-redux'
import { addTodo } from '../../store/action'
// import React, { Component } from 'react'
//
// class AddTodo extends Component {
//   constructor (props) {
//     super(props)
//     this.state = {
//       inputValue: ''
//     }
//     this.textInput = React.createRef()
//     this.handleClick = this.handleClick.bind(this)
//   }
//
//   handleClick () {
//     this.props.dispatch(addTodo(this.textInput.value))
//   }
//
//   render () {
//     return (
//       <div>
//         <input type="text" ref={this.textInput}/>
//         <button onClick={this.handleClick}>添加</button>
//       </div>
//     )
//   }
// }
//
// export default connect()(AddTodo)

import React from 'react'
import { connect } from 'react-redux'
// import { addTodo } from '../actions'

const AddTodo = ({ dispatch }) => {
  let input

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault()
          if (!input.value.trim()) {
            return
          }
          dispatch(addTodo(input.value))
          input.value = ''
        }}
      >
        <input ref={node => (input = node)} />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  )
}

export default connect()(AddTodo)
