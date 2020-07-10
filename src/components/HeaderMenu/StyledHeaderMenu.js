import styled from 'styled-components'

import { lightGreen, lightGrey, darkGrey } from '../../constants/constants'

export const Header = styled.nav`
  position: fixed;
  width: 100%;

  border-bottom: solid 2px ${({ theme }) => (theme === 'dark' ? lightGreen : darkGrey)};
  padding: 20px;
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
`
export const StyledBurger = styled.div`
  width: 2rem;
  height: 2rem;
  top: 15px;
  left: 20px;
  z-index: 20;
  margin: 0.5rem;
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
  width: 230px;
  padding-top: 3.5rem;
  transition: transform 0.3s ease-in-out;
`
