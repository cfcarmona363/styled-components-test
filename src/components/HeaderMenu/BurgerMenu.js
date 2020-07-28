import React, { useContext } from 'react'
import SideNav from './SideNav'
import { useSelector } from 'react-redux'
import { StyledBurger } from './StyledHeaderMenu'
import { MenuContext } from '../../context/menuContext'

const BurgerMenu = () => {
  const { isOpen, setIsOpen } = useContext(MenuContext)
  const { theme } = useSelector(store => store.Theme)

  return (
    <>
      <SideNav open={isOpen} />
      <StyledBurger open={isOpen} onClick={() => setIsOpen(!isOpen)} theme={theme}>
        <div />
        <div />
        <div />
      </StyledBurger>
    </>
  )
}

export default BurgerMenu
