import React from 'react'
import EagleLogo from './EagleLogo.jpg'
import styled from 'styled-components'

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
  font-family: 'Lato', sans-serif;
`

const Logo = () => {
  return (
    <Image>
      <LogedInName>Francisco Carmona</LogedInName>
      <img src={EagleLogo} alt="eagleLogo" />
    </Image>
  )
}

export default Logo
