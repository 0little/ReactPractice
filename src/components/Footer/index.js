import React, { Component } from 'react'
import { VisibilityFilters } from '../../store/action'
import FilterLink from '../container/filterLink'

class Footer extends Component {
  // constructor(props) {
  //   super(props)
  // }

  render () {
    return (
      <div>
        <FilterLink filter={VisibilityFilters.SHOW_ALL}>
          All
        </FilterLink>
        <FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>
          Active
        </FilterLink>
        <FilterLink filter={VisibilityFilters.SHOW_COMPLETED}>
          Completed
        </FilterLink>
      </div>
    )
  }

}

export default Footer