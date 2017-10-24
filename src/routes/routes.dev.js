import React from 'react'
import PropTypes from 'prop-types'
import {Provider} from 'react-redux'
import {ConnectedRouter} from 'react-router-redux'
import {Route} from 'react-router'

import App from '../pages/HomePage/HomePage'
import DevTools from '../containers/DevTools'
import {AppContainer} from 'react-hot-loader'

const Root = ({ store }) => (
  <AppContainer>
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <div>
          <Route exact path='/' component={App} />
          <DevTools />
        </div>
      </ConnectedRouter>
    </Provider>
  </AppContainer>
)

Root.propsTypes = {
  store: PropsTypes.object.isRequired,
}

export default Root
