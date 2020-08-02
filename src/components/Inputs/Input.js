import React from 'react'
import { StyledInput, StyledLabel, StyledInputWrapper } from './StyledInput'
import { useSelector } from 'react-redux'

const Input = ({ label, width, fontSize, onChange, value }) => {
  const { theme } = useSelector(store => store.Theme)
  return (
    <StyledInputWrapper width={width}>
      <StyledInput
        type="input"
        name="input"
        id="input"
        fontSize={fontSize}
        theme={theme}
        onChange={onChange}
        value={value}
        required
      />
      <StyledLabel htmlFor="input" fontSize={fontSize} theme={theme}>
        {label}
      </StyledLabel>
    </StyledInputWrapper>
  )
}

export default Input
