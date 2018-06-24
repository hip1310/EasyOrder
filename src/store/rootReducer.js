import { combineReducers } from 'redux'

export const RESET = 'easyorder/root/reset'

const appReducer = combineReducers({

})

export default (state, action) => {
  let newState = state
  if (action.type === RESET) {
    newState = {}
  }

  return appReducer(newState, action)
}
