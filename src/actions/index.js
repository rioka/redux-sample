let nextTodoId = 0

// Describe the action to add a new todo
export const addTodo = (text) => {
  return {
    type: 'ADD_TODO',
    id: nextTodoId++,
    text
  }
}

// Describe the action to set the visibility filter on the list
export const setVisibilityFilter = (filter) => {
  return {
    type: 'SET_VISIBILITY_FILTER',
    filter
  }
}

// Describe the action to toggle the state of a todo (active / completed)
export const toggleTodo = (id) => {
  return {
    type: 'TOGGLE_TODO',
    id
  }
}