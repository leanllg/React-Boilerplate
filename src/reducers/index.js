import {BTN_CLICK} from '../actions'
import {combineReducers} from 'redux'

const btnReducer = (state={color: 'white', isClicked: false}, action) => {
  switch (action.type) {
    case BTN_CLICK:
      return {
        ...state,
        color: state.isClicked ? 'black' : 'red',
        isClicked: !state.isClicked,
        action: action.type
      }
    default:
      return state
  }
}

const test = () => ({lalala: 123})

const rootReducer = combineReducers({btnReducer, test})

export default rootReducer
