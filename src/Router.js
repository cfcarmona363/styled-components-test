import React, { useContext } from 'react'
import { Route, Switch, BrowserRouter } from 'react-router-dom'

import HomePage from './Pages/HomePage'
import ButtonsPage from './Pages/ButtonsPage'
import InputsPage from './Pages/InputsPage'
import NavBar from './components/HeaderMenu/NavBar'
import { PageContainer } from './styledComponents/StyledContainers'
import { MenuContext } from './context/menuContext'

const Router = () => {
  const { isOpen, setIsOpen } = useContext(MenuContext)
  const openCloseMenu = () => {
    if (isOpen) setIsOpen(false)
  }

  return (
    <BrowserRouter>
      <NavBar />
      <PageContainer disabled={isOpen} menuOpen={isOpen} onClick={openCloseMenu}>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/buttons" component={ButtonsPage} />
          <Route exact path="/inputs" component={InputsPage} />
        </Switch>
      </PageContainer>
    </BrowserRouter>
  )
}

export default Router
