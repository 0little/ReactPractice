//容器组件
import MyCart from './myCart'
import { connect } from 'react-redux'
import * as cartAction from '../action'
import { routerActions } from 'react-router-redux'
import { bindActionCreators } from 'redux'

const mapStateToProps = (state) => {
 return {
  myCart: state.myCart
  }
}

const mapDispatchToProps = (dispatch) => {
  return Object.assign(
    {},
    bindActionCreators(cartAction, dispatch),
    bindActionCreators(routerActions, dispatch)
  )
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MyCart)