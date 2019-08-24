import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { Menu, Icon } from 'ppfish'
import rootReducer from './reducer'
import GoodsList from './GoodsList'
import MyCart from'./MyCart'

const store = createStore(rootReducer)

class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      'name': 'HMY Cart',
      'current': 'list'
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick (e) {
    this.setState({
      'current': e.key
    })
  }

  render () {
    return (
      <Provider store={store}>
        <h1>Welcome to {this.state.name}</h1>
        <Menu
          onClick={this.handleClick}
          selectedKeys={[this.state.current]}
          mode="horizontal"
        >
          <Menu.Item key="list">
            <Icon type="folder-close-line" /> 商品列表
          </Menu.Item>
          <Menu.Item key="cart">
            <Icon type="user-line" /> 购物车
          </Menu.Item>
        </Menu>
        {this.state.current === 'list' ? <GoodsList/> : <MyCart/>}
      </Provider>
    )
  }
}

export default Cart