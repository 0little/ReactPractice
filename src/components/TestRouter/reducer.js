import {combineReducers} from "redux"
import { routerReducer } from 'react-router-redux'

const goodsList = (state = [], action) => {
  return state
}

const myCart = (state = [], action) => {
  return state
}

const rootReducer = combineReducers({goodsList, myCart, routing: routerReducer})

export default rootReducer