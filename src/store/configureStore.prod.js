import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'

import reducers from '../reducers'
import middlewares from '../middlewares'

export const configureStore = (routerReducer, middleware) => preloadedState => (
  createStore(
    combineReducers({
      ...reducers,
      router: routerReducer
    }),
    preloadedState,
    applyMiddleware(...middlewares, middleware, thunk)
  )
)
