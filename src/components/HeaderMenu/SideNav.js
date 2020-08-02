import React, { useContext } from 'react'
import ThemeSelector from './ThemeSelector'
import { StyledSideNav, SideNavItem } from './StyledHeaderMenu'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Separator } from '../../styledComponents/Components'
import { MenuContext } from '../../context/menuContext'

const redirections = [
  {
    label: 'Home',
    route: '/'
  },
  {
    label: 'Buttons',
    route: '/buttons'
  },
  {
    label: 'Inputs',
    route: '/inputs'
  }
]

const SideNav = ({ open }) => {
  const { setIsOpen } = useContext(MenuContext)
  const { theme } = useSelector(store => store.Theme)
  return (
    <StyledSideNav open={open} theme={theme}>
      <Separator size={2} />
      <ThemeSelector />
      <Separator size={4} />
      {redirections.map(item => (
        <SideNavItem key={item.label}>
          <Link to={item.route} onClick={() => setIsOpen(false)}>
            {item.label}
          </Link>
          <Separator size={2} />
        </SideNavItem>
      ))}
    </StyledSideNav>
  )
}

export default SideNav
