import styled from 'styled-components'

import { lightGreen, lightGrey, darkGrey } from '../constants/constants'

export const MainContainer = styled.div`
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
`
