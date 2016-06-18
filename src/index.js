import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import todoApp from './reducers'
import App from './components/App'

// Create the store, using "todoApp", imported above, as reducer function
let store = createStore(todoApp)

// By wrapping the App component with Provider, all the containers
// in the application will have access to the store defined above,
// no need to pass it explicitly down the hierarchy
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)