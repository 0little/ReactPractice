import { Route } from "react-router-dom"
import TodoList from '../todoList'
import Child from '../Child'
import Home from '../home'
import Cart from '../cart'
import React from "react";



export default (
  <Route>
    <Route path="/" exact component={Home} />
    <Route path="/todo/" component={TodoList} />
    <Route path="/child/" component={Child} />
    <Route path="/cart/" component={Cart} />
  </Route>
)