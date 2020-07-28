import React, { useContext } from 'react'
import { Route, Switch, BrowserRouter } from 'react-router-dom'

import HomePage from './Pages/HomePage'
import ButtonsPage from './Pages/ButtonsPage'
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
      <PageContainer menuOpen={isOpen} onClick={openCloseMenu}>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/buttons" component={ButtonsPage} />
        </Switch>
      </PageContainer>
    </BrowserRouter>
  )
}

export default Router
