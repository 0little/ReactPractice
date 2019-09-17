import React, { Component } from 'react'
import { Provider } from 'react-redux'
import configureStore from './configureStore'
import rootReducer from './reducer'
import { syncHistoryWithStore } from 'react-router-redux'
import { browserHistory, Router } from 'react-router'
import routes from './routes'

const store = configureStore(rootReducer, {})
const history = syncHistoryWithStore(browserHistory, store)

class TestRouter extends Component {
  render () {
    return (
      <Provider store={store}>
        <Router history={history} routes={routes}/>
      </Provider>
    )
  }

}

export default TestRouter