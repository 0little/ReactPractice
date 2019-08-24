import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import { Button } from 'ppfish';


class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      'line1': 111111,
      'line2': 222222
    }
  }

  render () {
    return (
      <div>
        Welcome to my app homepage!
        <div>我是第一行{this.state.line1}</div>
        <div>我是第二行{this.state.line2}</div>
        <Button>Welcome</Button>
      </div>
    )
  }
}

export default Home