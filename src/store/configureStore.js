import createHistory from 'history/createStore'
import {routerReducer, routerMiddleware} from 'react-router-redux'

const history = createHistory()

const middleware = routerMiddleware(history)

let configureStore;

if (process.env.NODE_ENV === 'production') {
  configureStore = require('./configureStore.prod')
} else {
  configureStore = require('./configureStore.dev')
}

module.exports = configureStore(history, middleware)
