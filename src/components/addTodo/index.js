import React, { Component } from 'react'
import PropTypes from 'prop-types'

class AddTodo extends Component {
  static propTypes = {
    onClick: PropTypes.func.isRequired
  }

  constructor (props) {
    super(props)
    this.state = {
      inputValue: ''
    }
    this.textInput = React.createRef()
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick () {
    this.props.onClick(this.textInput.value)
  }

  render () {
    return (
      <div>
        <input type="text" ref={this.textInput}/>
        <button onClick={this.handleClick}>添加</button>
      </div>
    )
  }
}

export default AddTodo