import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'

import reducers from '../reducers'
import middlewares from '../middleware'

export const configureStore = (routerReducer, middleware) => preloadedState => (
  createStore(
    preloadedState,
    {
    ...reducers,
    router: routerReducer
    },
    applyMiddleware(...middlewares, middleware, thunk)
  )
)
