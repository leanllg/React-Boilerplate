import React from 'react'
import PropTypes from 'prop-types'
import {Provider} from 'react-redux'
import {ConnectedRouter} from 'react-router-redux'
import {Route} from 'react-router'

import App from '../pages/App'

const Root = ({ store }) => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Route exact path='/' component={App} />
    </ConnectedRouter>
  </Provider>
)

Root.propsTypes = {
  store: PropsTypes.object.isRequired,
}

export default Root
