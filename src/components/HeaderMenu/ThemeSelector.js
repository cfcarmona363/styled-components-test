import React from 'react'
import Action from '../../actions'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'

const SwitchSelector = styled.div`
  width: 70px;
  height: 20px;
  border: solid 1px ${({ theme }) => (theme === 'dark' ? 'rgb(203, 247, 237)' : 'rgb(57, 57, 57)')};
  border-radius: 20px;
  font-size: 15px;
  padding: 3px;
  display: flex;
  justify-content: space-evenly;
  cursor: pointer;
  span {
    transform: ${({ theme }) => (theme === 'dark' ? 'translateX(0)' : 'translateX(-120%)')};
    transition: transform 0.3s ease-in-out;
  }
`
const SwitchButton = styled.div`
  width: 35px;
  height: 20px;
  background-color: ${({ theme }) => (theme === 'dark' ? 'rgb(203, 247, 237)' : 'rgb(57, 57, 57)')};
  border-radius: 20px;
  z-index: 20;
  transform: ${({ theme }) => (theme === 'dark' ? 'translateX(0)' : 'translateX(100%)')};
  transition: transform 0.3s ease-in-out;
`

const Title = styled.span`
  font-size: 17px;
  margin-bottom: 10px;
`

const ThemeSelector = () => {
  const { theme } = useSelector(state => state.Theme)
  const dispatch = useDispatch()

  const changeTheme = () => {
    dispatch(Action.Theme.setTheme(theme === 'dark' ? 'light' : 'dark'))
  }
  return (
    <>
      <Title>DARK MODE</Title>
      <SwitchSelector onClick={changeTheme} theme={theme}>
        <SwitchButton theme={theme} />
        <span>{theme === 'dark' ? 'ON' : 'OFF'}</span>
      </SwitchSelector>
    </>
  )
}

export default ThemeSelector
