import { connect } from 'react-redux'
import { setVisibilityFilter } from '../actions'
import Link from '../components/Link'

// This component is used in ../components/Footer
// to render the filter options (All/Active/Completed)

// Maps the state to properties we want to pass to our
// presentational components (ie Link); in this case, we want to 
// set the active property to the result of the expression
//   ownProps.filter === state.visibilityFilter
// So property "active" in Link component will be set to the value of the 
// above expression
const mapStateToProps = (state, ownProps) => {
  return {
    active: ownProps.filter === state.visibilityFilter
  }
}

// Maps dispatch action to properties; in this case,
// we want to dispatch action "setVisibilityFilter"
// when the user clicks on a link to set the active filter
// So we bind property "onClick" of Link component to this function   
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      dispatch(setVisibilityFilter(ownProps.filter))
    }
  }
}

// Now, using connect, we actually activate the previously defined maps
// on the Link component (imported above)
// So at the end this components render a Link, where
// - "active" property of Link component is bound to 
//   the result of the comparison between the "filter" property of this
//   component and state.visibilityFilter
// - "onClick" property of Link component dispatches action
//   setVisibilityFilter (also imported above) with the value 
//   of "filter" property of this component  
const FilterLink = connect(
  mapStateToProps,
  mapDispatchToProps
)(Link)

export default FilterLink