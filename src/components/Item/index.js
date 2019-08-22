import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Item extends Component {
  static propTypes = {
    onClick: PropTypes.func.isRequired,
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired
  }

  constructor (props) {
    super(props)
  }

  render () {
    return (
      <li
        onClick={this.props.onClick}
        style={{textDecoration: this.props.completed ? 'line-through': 'none'}}
      >
        {this.props.text}
      </li>
    )
  }
}

export default Item