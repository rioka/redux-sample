// Set the new state from the current state and the provided action
// - state is a string, so we simply return the new string
const visibilityFilter = (state = 'SHOW_ALL', action) => {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      // if we are requested to set a new filter, just return it
      return action.filter
    default:
      // in any other case, return the existing filter
      return state
  }
}

export default visibilityFilter