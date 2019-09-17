import React from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './rootReducer'
import TodoList from '../todoList'
import Child from '../Child'
import Home from '../home'
import Cart from '../cart'
import TestProps from '../testProps'
import MyTable from '../myTable'
import './index.less'

const store = createStore(rootReducer)

function MyRouter() {
  return (
    <Provider store={store}>
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/todo/">TodoList</Link>
            </li>
            <li>
              <Link to="/child/">Child</Link>
            </li>
            <li>
              <Link to="/cart/">Cart</Link>
            </li>
            <li>
              <Link to="/testProps/">TestProps</Link>
            </li>
            <li>
              <Link to="/myTable/">MyTable</Link>
            </li>
          </ul>
        </nav>

        <hr/>

        <Route path="/" exact component={Home} />
        <Route path="/todo/" component={TodoList} />
        <Route path="/child/" component={Child} />
        <Route path="/cart/" component={Cart} />
        <Route path="/testProps/" component={TestProps} />
        <Route path="/myTable/" component={MyTable} />
      </div>
    </Router>
    </Provider>
  );
}
export default MyRouter