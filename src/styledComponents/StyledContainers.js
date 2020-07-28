import styled from 'styled-components'

import { lightGreen, lightGrey, darkGrey } from '../constants/constants'

export const MainContainer = styled.div`
  font-family: 'Lato', sans-serif;
  margin: 0;
  padding: 0;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  overflow: auto;
  box-sizing: border-box;
  background-color: ${({ theme }) => (theme === 'dark' ? darkGrey : lightGrey)};
  color: ${({ theme }) => (theme === 'dark' ? lightGreen : darkGrey)};
  font-size: 25px;
  height: 100vh;
  display: flex;
  flex-direction: column;
`

export const PageContainer = styled.div`
  box-sizing: border-box;
  flex: 1;
  align-self: center;
  margin: 100px 0 50px 0;
  width: 70%;
  filter: brightness(${({ menuOpen }) => (menuOpen ? '50%' : '100%')});
`
export const GridContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
`
