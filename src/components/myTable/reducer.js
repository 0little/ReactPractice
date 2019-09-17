// import {combineReducers} from "redux"

const DEFAULT_TYPES = ['调研','测试','新品']
const DEFAULT_PRO_STATES = ['项目状态1','项目状态2','项目状态3']
const DEFAULT_ORDER_STATES = ['订单状态1','订单状态2','订单状态3']

const DEFAULT_SELECT = {
  selectedType: '',
  selectedProState: '',
  selectedState: '',
  selectedTime: '',
  types: DEFAULT_TYPES,
  proStates: DEFAULT_PRO_STATES,
  orderStates: DEFAULT_ORDER_STATES,
}

export const proSelect = (state = DEFAULT_SELECT, action) => {
  //这里传过来的value是数组
  switch (action.type) {
    case 'CHANGE_TYPE':
      return Object.assign({}, state, {selectedType: action.value})
    case 'CHANGE_PRO_STATE':
      return Object.assign({}, state, {selectedProState: action.value})
    case 'CHANGE_ORDER_STATE':
      return Object.assign({}, state, {selectedState: action.value})
    case 'CHANGE_TIME':
      return Object.assign({}, state, {selectedTime: action.value})
    default:
      return state
  }
}

// export default combineReducers({proSelect})