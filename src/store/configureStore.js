import createHistory from 'history/createBrowserHistory'
import {routerReducer, routerMiddleware} from 'react-router-redux'

export const history = createHistory()

const middleware = routerMiddleware(history)

let configureStore;

if (process.env.NODE_ENV === 'production') {
  configureStore = require('./configureStore.prod')
} else {
  configureStore = require('./configureStore.dev').default
}

export default configureStore(routerReducer, middleware)
