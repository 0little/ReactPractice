import React from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
// import { Router, Route, IndexRoute  } from 'react-router'
// import { Link  } from 'react-router-dom'
import TodoList from '../todoList'
import Child from '../Child'
import Home from '../home'
// import Message from '../Child/Message'

function MyRouter() {
  return (
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
          </ul>
        </nav>

        <Route path="/" exact component={Home} />
        <Route path="/todo/" component={TodoList} />
        <Route path="/child/" component={Child} />
      </div>
    </Router>
  );
}
export default MyRouter