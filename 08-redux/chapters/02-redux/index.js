import React from 'react'

import rootReducer from './reducer'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import Books from './Books'

const store = createStore(rootReducer)

export default function App () {
  return (
    <Provider store={store}>
      <Books />
    </Provider>
  )
}
