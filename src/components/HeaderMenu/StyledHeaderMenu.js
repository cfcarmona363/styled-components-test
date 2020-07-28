import styled from 'styled-components'

import { lightGreen, lightGrey, darkGrey } from '../../constants/constants'

export const Header = styled.div`
  width: 100%;
  border-bottom: solid 2px ${({ theme }) => (theme === 'dark' ? lightGreen : darkGrey)};
  padding: 10px;
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  position: fixed;
  top: 0;
  background-color: inherit;
  z-index: 100;
`
export const StyledBurger = styled.div`
  width: 2rem;
  height: 2rem;
  top: 15px;
  left: 20px;
  z-index: 20;
  margin: 1rem;
  align-self: center;
  display: flex;
  justify-content: space-around;
  flex-flow: column nowrap;
  cursor: pointer;
  div {
    width: 2rem;
    height: 0.25rem;
    background-color: ${({ theme }) => (theme === 'dark' ? lightGreen : darkGrey)};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;
    &:nth-child(1) {
      transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
    }
    &:nth-child(2) {
      transform: ${({ open }) => (open ? 'translateX(100%)' : 'translateX(0)')};
      opacity: ${({ open }) => (open ? 0 : 1)};
    }
    &:nth-child(3) {
      transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
    }
  }
`

export const StyledSideNav = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  li {
    padding: 18px 10px;
  }
  border-right: solid 3px ${({ theme }) => (theme === 'dark' ? lightGreen : darkGrey)};
  flex-flow: column nowrap;
  background-color: ${({ theme }) => (theme === 'dark' ? darkGrey : lightGrey)};
  position: fixed;
  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(-100%)')};
  top: 0;
  left: 0;
  height: 100vh;
  width: 200px;
  padding-top: 3.5rem;
  transition: transform 0.3s ease-in-out;
`
export const SideNavItem = styled.a`
  a {
    text-decoration: none;
    color: inherit;
    cursor: pointer;
  }
`
