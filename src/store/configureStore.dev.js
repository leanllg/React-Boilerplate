import {createStore, combineReducers, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'
import {createLogger} from 'redux-logger'

import reducers from '../reducers'
import middlewares from '../middlewares'

import DevTools from '../containers/DevTools'

const configureStore = (routerReducer, middleware) => preloadedState => {
  console.log(...reducers)
  const store = createStore(
    combineReducers({
      ...reducers,
      router: routerReducer
    }),
    preloadedState,
    compose(
      applyMiddleware(middleware, ...middlewares, thunk, createLogger()),
      DevTools.instrument()
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
