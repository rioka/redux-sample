import React, { PropTypes } from 'react'

// Presentational component for a link
// with an action associated to the click event
// If the 'active' flag is set, renders the children nodes
// otherwise it renders a <a>, with the provided action 
// bound to the click event
const Link = ({ active, children, onClick }) => {
  if (active) {
    return <span>{children}</span>
  }

  return (
    <a href="#"
       onClick={e => {
         e.preventDefault()
         onClick()
       }}
    >
      {children}
    </a>
  )
}

Link.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Link