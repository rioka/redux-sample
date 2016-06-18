import { connect } from 'react-redux'
import { toggleTodo } from '../actions'
import TodoList from '../components/TodoList'

// This component handles the filtering of the list of todo
// according to the filter set

// Internal method to filter out a list of todo items
const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return todos
    case 'SHOW_COMPLETED':
      return todos.filter(t => t.completed)
    case 'SHOW_ACTIVE':
      return todos.filter(t => !t.completed)
  }
}

// Maps the state to properties we want to pass to our
// presentational components (ie TodoList); in this case, we want to 
// set the todos property to the list of todos, applying
// the current filter
// So property "todos" in TodoList will be set to the value of
// the list of todo, filtered out 
const mapStateToProps = (state) => {
  return {
    todos: getVisibleTodos(state.todos, state.visibilityFilter)
  }
}

// Maps dispatch action to properties; in this case,
// we want to dispatch action "toggleTodo"
// when the user clicks on a todo
// So we bind "onTodoClick" property of TodoList to this action
const mapDispatchToProps = (dispatch) => {
  return {
    onTodoClick: (id) => {
      dispatch(toggleTodo(id))
    }
  }
}

// Now, using connect, we actually activate the previously defined maps
// on the TodoList component (imported above)
// This way, when VisibleTodoList is rendered, all the properties are set and actions
// are automatically invoked  
const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)

export default VisibleTodoList