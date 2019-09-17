//容器组件
import MyTable from './view'
import { connect } from 'react-redux'
import * as proAction from './action'
// import { routerActions } from 'react-router-redux'
import { bindActionCreators } from 'redux'

const mapStateToProps = (state) => {
  return {
    proSelect: state.proSelect
  }
}

const mapDispatchToProps = (dispatch) => {
  return Object.assign(
    {},
    bindActionCreators(proAction, dispatch)
  )
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MyTable)