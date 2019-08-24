import React, { Component } from 'react'
import { Table, Button } from 'ppfish'
import PropTypes from 'prop-types'

class MyCart extends Component {
  static propTypes = {
    myCart: PropTypes.array.isRequired
  }

  constructor (props) {
    super(props)
    this.state = {
      list: this.props.myCart
    }
  }

  handleClick = () => {
    console.log('handleClick')
    console.log(this.props,  'ppppppppppp')
    this.props.push('/todo')
  }

  render () {
    const {addCount, decreaseCount, myCart} = this.props

    const col = [
      {
        title: 'name',
        dataIndex: 'name',
        key: 'name',
      },
      {
        title: 'price',
        dataIndex: 'price',
        key: 'price',
      },
      {
        title: 'count',
        dataIndex: 'count',
        key: 'count',
      },
      {
        title: 'operation',
        key: 'operation',
        render: (text, record) => (
          <div>
            <Button onClick={() => addCount(record.id)}>+</Button>
            <Button onClick={() => decreaseCount(record.id)}>-</Button>
          </div>
        )
      },
    ]

    return (
      <div>
        <h1>My Cart</h1>
        <Button onClick={this.handleClick}>TodoList</Button>
        <Table dataSource={myCart} columns={col} rowKey="id"/>
      </div>
    )
  }
}

export default MyCart