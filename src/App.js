/* eslint-disable no-unused-vars */
import React from 'react'
import store from './store'
import { Provider } from 'react-redux'
import MenuProvider from './context/menuContext'
import GeneralContainer from './Pages/GeneralContainer'
import favicon from '../public/favicon.ico'

const App = () => {
  return (
    <Provider store={store}>
      <MenuProvider>
        <GeneralContainer />
      </MenuProvider>
    </Provider>
  )
}

export default App
