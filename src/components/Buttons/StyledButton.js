import styled from 'styled-components'
import { buttonsColors } from '../../constants/constants'

export const StandardButton = styled.button`
  width: 150px;
  height: 40px;
  cursor: pointer;
  border-radius: 30px;
  display: inline-block;
  background-color: ${({ theme, type }) => buttonsColors[theme][type].background};
  color: ${({ theme, type }) => buttonsColors[theme][type].font};
  font-size: 20px;
  font-weight: 600;
  outline: none;
  padding: 5px 20px;
  text-decoration: none;
  border: none;
  &:hover {
    filter: brightness(80%);
  }
`

export const AnimatedButton = styled(StandardButton)`
  border-bottom: 0.2em solid ${({ theme, type }) => buttonsColors[theme][type].shadow};
  -moz-transition: 0.2s;
  -webkit-transition: 0.2s;
  transition: 0.2s;
  box-shadow: 0 2px 2px ${({ theme, type }) => buttonsColors[theme][type].shadow};

  &:active {
    margin-top: 0.2em;
    border-bottom-width: 0;
  }
`
