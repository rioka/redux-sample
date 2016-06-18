import React, { PropTypes } from 'react'

// Presentational component for a todo
// (pure functional) component
// no dependencies on state, ...
// just know how to display a component   
const Todo = ({ onClick, completed, text }) => (
  <li
    onClick={onClick}
    style={{
      textDecoration: completed ? 'line-through' : 'none'
    }}
  >
    {text}
  </li>
)

// properties' validation
// must receive all these properties 
Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default Todo