import React from 'react'
import { StandardButton, AnimatedButton } from './StyledButton'
import { useSelector } from 'react-redux'

const FlatButton = ({ label, onClick, type }) => {
  const { theme } = useSelector(store => store.Theme)
  return (
    <StandardButton onClick={onClick} theme={theme} type={type}>
      {label}
    </StandardButton>
  )
}

const RaisedButton = ({ label, onClick, type }) => {
  const { theme } = useSelector(store => store.Theme)
  return (
    <AnimatedButton onClick={onClick} theme={theme} type={type}>
      {label}
    </AnimatedButton>
  )
}

export { FlatButton, RaisedButton }
