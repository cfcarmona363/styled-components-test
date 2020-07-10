import React from 'react'
import { MainContainer } from './StyledContainers'
import NavBar from '../components/HeaderMenu/NavBar'
import { useSelector } from 'react-redux'

const Home = () => {
  const { theme } = useSelector(store => store.Theme)
  return (
    <MainContainer theme={theme}>
      <NavBar />
    </MainContainer>
  )
}

export default Home
