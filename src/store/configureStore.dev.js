import {createStore, combineReducers, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'
import {createLogger} from 'redux-logger'

import reducers from '../reducers'
import middlewares from '../middleware'

import Devtools from '../containers/Devtools'

export const configureStore = (routerReducer, middleware) => preloadedState => {
  const store = createStore(
    preloadedState,
    combineReducers({
      ...reducers,
      router: routerReducer
    }),
    compose(
      applyMiddleware(...middlewares, middleware, thunk),
      Devtools.instrument()
    )
  )

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers').default
      store.replaceReducer(nextRootReducer)
    })
  }

  return store
}

export default configureStore
