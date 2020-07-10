import React, { useState } from 'react'
import SideNav from './SideNav'
import { useSelector } from 'react-redux'
import { StyledBurger } from './StyledHeaderMenu'

const BurgerMenu = () => {
  const [open, setOpen] = useState(false)
  const { theme } = useSelector(store => store.Theme)

  return (
    <>
      <SideNav open={open} />
      <StyledBurger open={open} onClick={() => setOpen(!open)} theme={theme}>
        <div />
        <div />
        <div />
      </StyledBurger>
    </>
  )
}

export default BurgerMenu
