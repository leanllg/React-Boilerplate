import {createStore, combineReducers, applyMiddleware, compose} from 'redux'
import createSagaMiddleware from 'redux-saga'

import reducers from '../reducers'
import middlewares from '../utils/middlewares'

import DevTools from '../containers/DevTools'

const sagaMiddleware = createSagaMiddleware()
const configureStore = (routerReducer, middleware) => preloadedState => {
  const store = createStore(
    combineReducers({
      reducers,
      router: routerReducer
    }),
    preloadedState,
    compose(
      applyMiddleware(middleware, ...middlewares, sagaMiddleware),
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

  return {
    ...store,
    runSaga: sagaMiddleware.run
  }
}

export default configureStore
