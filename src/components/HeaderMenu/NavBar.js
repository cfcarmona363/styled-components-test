import React from 'react'
import BurgerMenu from './BurgerMenu'
import Avatar from '../Avatar/Avatar'
import { Header } from './StyledHeaderMenu'
import { useSelector } from 'react-redux'

const NavBar = () => {
  const { theme } = useSelector(store => store.Theme)
  return (
    <Header theme={theme}>
      <BurgerMenu />
      <Avatar />
    </Header>
  )
}

export default NavBar
