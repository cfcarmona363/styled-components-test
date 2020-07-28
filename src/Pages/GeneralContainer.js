import React from 'react'
import MenuProvider from '../context/menuContext'
import { MainContainer } from '../styledComponents/StyledContainers'
import { useSelector } from 'react-redux'

const GeneralContainer = ({ children }) => {
  const { theme } = useSelector(store => store.Theme)
  return (
    <MenuProvider>
      <MainContainer theme={theme}>{children}</MainContainer>
    </MenuProvider>
  )
}

export default GeneralContainer
