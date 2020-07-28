/* eslint-disable no-unused-vars */
import React from 'react'
import store from './store'
import { Provider } from 'react-redux'
import Router from './Router'
import favicon from '../public/favicon.ico'
import GeneralContainer from './Pages/GeneralContainer'

const App = () => {
  return (
    <Provider store={store}>
      <GeneralContainer>
        <Router />
      </GeneralContainer>
    </Provider>
  )
}

export default App
