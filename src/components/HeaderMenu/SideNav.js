import React from 'react'
import ThemeSelector from './ThemeSelector'
import { StyledSideNav } from './StyledHeaderMenu'
import { useSelector } from 'react-redux'

const SideNav = ({ open }) => {
  const { theme } = useSelector(store => store.Theme)
  return (
    <StyledSideNav open={open} theme={theme}>
      <ThemeSelector />
    </StyledSideNav>
  )
}

export default SideNav
