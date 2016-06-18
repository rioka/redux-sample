// REMEMBER: only pure function, so
// - do not update the received arguments
// - return a new "state", do not mutate the existing one

// Internal method (reducer) to act on a todo
// Note: since this is the reducer for a todo 
// state is actually a todo
const todo = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      // return a new item
      return {
        id: action.id,
        text: action.text,
        completed: false
      }
    case 'TOGGLE_TODO':
      // if it's not the desired item, just return it
      if (state.id !== action.id) {
        return state
      }

      // if it's the matching item, return a *new* instance
      // with property "completed" updated 
      return Object.assign({}, state, {
        completed: !state.completed
      })

    default:
      // in any other case, just return the input item
      return state
  }
}

// Set the new state from the current state and the provided action
// Remember: do not mutate the existing state, return a new state instead
const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      // if we are about to add a new item, 
      // return a new state with the concatenation of the current state
      // and the new item
      return [
        ...state,
        todo(undefined, action)
      ]
    case 'TOGGLE_TODO':
      // if we are about to toggle a todo, 
      // loop through the items, and update the matching one
      // It is safe, since .map() return a new array
      return state.map(t =>
        todo(t, action)
      )
    default:
      // in any other case, just return the current state
      return state
  }
}

export default todos