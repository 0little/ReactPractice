//视图组件
import React, { Component } from 'react'

class GoodList extends Component {
  constructor (props) {
    super(props)
  }

  handleClick = id => {
    this.props.onClick(id)
  }

  render () {
    let lis = this.props.list.map(item =>
      <li key={item.id} style={{width: '400px'}}>
      <div>name: {item.name}</div>
      <div>price: {item.price}</div>
      <button onClick={() => this.handleClick(item.id)}>Add</button>
      </li>
    )
    return (
      <ul>
        {lis}
      </ul>
    )
  }
}

export default GoodList