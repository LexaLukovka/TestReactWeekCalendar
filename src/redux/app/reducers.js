import { combineReducers } from 'redux'

import calendar from './calendar/reducer'
import alert from './alert/reducer'

const reducers = combineReducers({
  calendar,
  alert,
})

export default reducers
