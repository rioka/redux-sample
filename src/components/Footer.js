import React from 'react'
import FilterLink from '../containers/FilterLink'

// Presentational component to render the footer 
// Just renders a list of FilterLink components
// A FilterLink know how to render itself according to the state of the
// app 
const Footer = () => (
  <p>
    Show:
    {" "}
    <FilterLink filter="SHOW_ALL">
      All
    </FilterLink>
    {", "}
    <FilterLink filter="SHOW_ACTIVE">
      Active
    </FilterLink>
    {", "}
    <FilterLink filter="SHOW_COMPLETED">
      Completed
    </FilterLink>
  </p>
)

export default Footer