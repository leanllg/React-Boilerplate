import {createStore, combineReducers, applyMiddleware} from 'redux'
import createSagaMiddleware from 'redux-saga'

import reducers from '../reducers'
import middlewares from '../utils/middlewares'

const sagaMiddleware = createSagaMiddleware()
export const configureStore = (routerReducer, middleware) => preloadedState => (
  {
    ...createStore(
      combineReducers({
        reducers,
        router: routerReducer
      }),
      preloadedState,
      applyMiddleware(...middlewares, middleware, sagaMiddleware)
    ),
    runSaga: sagaMiddleware.run
  }
)
