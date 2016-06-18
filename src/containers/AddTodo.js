import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'

// This component handles the adding of a new todo

// Definition of the component
// - on form submit, we dispatch action addTodo (imported above)
//   and reset the value
let AddTodo = ({ dispatch }) => {
  let input

  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        dispatch(addTodo(input.value))
        input.value = ''
      }}>
        <input ref={node => {
          input = node
        }} />
        <button type="submit">
          Add Todo
        </button>
      </form>
    </div>
  )
}

// Now, using connect, we actually activate the binding
// on the AddTodo component (imported above)
// This way, when AddTodo is rendered, on submit the action is actually
// dispatched to the store
AddTodo = connect()(AddTodo)

export default AddTodo