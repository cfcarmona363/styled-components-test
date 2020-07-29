import React from 'react'
import { MainContainer } from '../styledComponents/StyledContainers'
import { useSelector } from 'react-redux'
import Router from '../Router'

const GeneralContainer = () => {
  const { theme } = useSelector(store => store.Theme)
  return (
    <MainContainer theme={theme}>
      <Router />
    </MainContainer>
  )
}

export default GeneralContainer
