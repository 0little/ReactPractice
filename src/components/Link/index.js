import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Link extends Component {
  static propTypes = {
    active: PropTypes.bool.isRequired,
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props)
  }

  render () {
    return (
      <button
        disabled={this.props.active}
        onClick={this.props.onClick}
        style={{marginLeft: '4px'}}
      >
        {this.props.children}
      </button>
    )
  }

}

export default Link