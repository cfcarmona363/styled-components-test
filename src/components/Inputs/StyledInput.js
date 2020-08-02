import styled from 'styled-components'
import { lightGreen, lightGrey, darkGrey, shadowGrey } from '../../constants/constants'

export const StyledInputWrapper = styled.div`
  position: relative;
  width: ${props => props.width};
`

export const StyledInput = styled.input`
  border: 0;
  border-bottom: 1px solid #555;
  background: transparent;
  width: 100%;
  padding: 2rem 0 1rem 0;
  font-size: ${props => props.fontSize};
  font-weight: 800;
  color: ${({ theme }) => (theme === 'dark' ? lightGreen : darkGrey)};

  &:focus,
  :valid {
    border: none;
    outline: none;
    border-bottom: 3px solid ${({ theme }) => (theme === 'dark' ? lightGreen : darkGrey)};
  }
`

export const StyledLabel = styled.label`
  position: absolute;
  top: 2rem;
  left: 0;
  font-size: ${props => props.fontSize};
  color: ${({ theme }) => (theme === 'dark' ? lightGrey : darkGrey)};
  transition: all 0.2s ease-in-out;
  font-weight: 800;

  ${StyledInput}:focus ~ &, ${StyledInput}:valid ~ & {
    top: 0;
    left: 0;
    opacity: 0.7;
  }
`
