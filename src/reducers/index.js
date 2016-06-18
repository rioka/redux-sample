import { combineReducers } from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'

// This is the reducer for the whole application
// It combines the two reducers imported above
// Each reducer receives in turn every action,
// yet since each reducer simply returns the existing state
// for actions it's not aware of, this is not an issue
const todoApp = combineReducers({
  todos,
  visibilityFilter
})

export default todoApp