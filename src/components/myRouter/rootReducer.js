import {combineReducers} from "redux"
import {goodsList, myCart} from "../cart/reducer";
import { proSelect } from '../myTable/reducer'

const rootReducer = combineReducers({proSelect, goodsList, myCart})

export default rootReducer