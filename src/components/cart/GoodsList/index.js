//容器组件
import GoodList from './goodList'
import { connect } from 'react-redux'
import { addCount } from '../action'

const mapStateToProps = (state) => ({
  list: state.goodsList
})

const mapDispatchToProps = (dispatch) => {
  return {onClick: (id) => dispatch(addCount(id))}
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GoodList)