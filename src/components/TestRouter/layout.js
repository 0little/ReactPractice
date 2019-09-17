import React, { Component } from 'react'

class Layout extends Component {

  render () {
    const { children } = this.props
    return (
      <div>
        <h1>我是TestRouter Layout</h1>
        {children}
      </div>
    )
  }
}

export default Layout