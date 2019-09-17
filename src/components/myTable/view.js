//视图组件
import React, { Component } from 'react'
// import reducer from './reducer'
import { Table, Input, Select, Button } from 'ppfish'
import './index.less'

// const store = createStore(reducer)

class MyTable extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    const Search = Input.Search, Option = Select.Option
    const { proSelect, changeType, changeProState, changeOrderState } = this.props

    return (
      <div>
        <div className='my-list-function-area'>
          {/*<Table></Table>*/}
          <Button type='primary' size='large' icon='upload-plus'>创建项目</Button>
          <div>
            <Search
              placeholder="搜索项目名称"
              onSearch={value => console.log(value)}
              style={{ width: 200 }}
            />
            <Select style={{width: 200, marginLeft: 30}} showSelectAll mode="multiple" placeholder='请选择项目类别'
                    onChange={value => changeType(value)} value={[]}>
              {proSelect.types.map(item => <Option key={item}>{item}</Option>)}
            </Select>
            <Select style={{width: 200, marginLeft: 30}} showSelectAll mode="multiple" placeholder='请选择项目状态'
                    onChange={value => changeProState(value)} value={[]}>
              {proSelect.proStates.map(item => <Option key={item}>{item}</Option>)}
            </Select>
            <Select style={{width: 200, marginLeft: 30}} showSelectAll mode="multiple" placeholder='请选择订单状态'
                    onChange={value => changeOrderState(value)} value={[]}>
              {proSelect.orderStates.map(item => <Option key={item}>{item}</Option>)}
            </Select>
          </div>
        </div>
      </div>
    )
  }
}

export default MyTable