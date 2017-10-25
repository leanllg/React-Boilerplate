import {BTN_CLICK} from '../../actions/index'

const consoleClick = store => next => action => {
  if (action.type === BTN_CLICK) {
    console.log('btn click')
    return next(action)
  }
  return next(action)
}

export default [consoleClick]
