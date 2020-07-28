import React from 'react'
import EagleLogo from './EagleLogo.js'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import { darkGrey, lightGreen } from '../../constants/constants'

const Image = styled.div`
  display: flex;
  box-sizing: border-box;

  img {
    max-width: 70px;
  }
`
const LogedInName = styled.span`
  padding: 20px;
  font-size: 25px;
`

const Logo = () => {
  const { theme } = useSelector(store => store.Theme)
  return (
    <Image>
      <LogedInName>Francisco Carmona</LogedInName>
      <EagleLogo size={80} color={theme === 'dark' ? lightGreen : darkGrey} />
    </Image>
  )
}

export default Logo
