import React, { PropTypes } from 'react'
import Todo from './Todo'

// Presentational component for a todo list
// (pure functional) component
// for each item in the received list
// renders a Todo component (defined in ./Todo.js)
const TodoList = ({ todos, onTodoClick }) => (
  <ul>
    {todos.map(todo =>
      <Todo
        key={todo.id}
        {...todo}
        onClick={() => onTodoClick(todo.id)}
      />
    )}
  </ul>
)

// properties' validation
// Must receive an array of objects, for which all properties
// are required  
TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired).isRequired,
  onTodoClick: PropTypes.func.isRequired
}

export default TodoList