import React from 'react'
import ThemeSelector from './ThemeSelector'
import { StyledSideNav, SideNavItem } from './StyledHeaderMenu'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Separator } from '../../styledComponents/Components'

const redirections = [
  {
    label: 'Home',
    route: '/'
  },
  {
    label: 'Buttons',
    route: '/buttons'
  }
]

const SideNav = ({ open }) => {
  const { theme } = useSelector(store => store.Theme)
  return (
    <StyledSideNav open={open} theme={theme}>
      <Separator size={2} />
      <ThemeSelector />
      <Separator size={4} />
      {redirections.map(item => (
        <SideNavItem key={item.label}>
          <Link to={item.route}>{item.label}</Link>
          <Separator size={2} />
        </SideNavItem>
      ))}
    </StyledSideNav>
  )
}

export default SideNav
