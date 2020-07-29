import React from 'react'
import { Title, Separator, Text, StrongText } from '../styledComponents/Components'
import { GridContainer } from '../styledComponents/StyledContainers'
import { FlatButton, RaisedButton } from '../components/Buttons/Button'

const ButtonsPage = () => {
  const handleClick = () => alert('CLICK')
  return (
    <>
      <Title align="left">Buttons</Title>
      <Text>
        You can choose from different designs (primary, danger, classic) and they all addapt to the dark theme
      </Text>
      <Separator size={1} />
      <Text>All buttons recive the following props:</Text>
      <Separator size={1} />
      <Text>
        <StrongText>onClick:</StrongText> A callback function that thiggers when the button is clicked
      </Text>
      <Separator size={1} />
      <Text>
        <StrongText>label:</StrongText> The label displayed inside the button
      </Text>
      <Separator size={1} />
      <Text>
        <StrongText>type:</StrongText> Type of button (primary, classic, danger)
      </Text>
      <Separator size={3} />
      <Title align="left">Flat button</Title>
      <GridContainer>
        <div>
          <Text>Classic</Text>
          <Separator size={1} />
          <FlatButton label="Button1" type="classic" onClick={handleClick} />
          <Separator size={2} />
        </div>
        <div>
          <Text>Primary</Text>
          <Separator size={1} />
          <FlatButton label="Button2" type="primary" onClick={handleClick} />
          <Separator size={2} />
        </div>
        <div>
          <Text>Danger</Text>
          <Separator size={1} />
          <FlatButton label="Button3" type="danger" onClick={handleClick} />
          <Separator size={2} />
        </div>
      </GridContainer>
      <Separator size={3} />
      <Title align="left">Raised button</Title>
      <GridContainer>
        <div>
          <Text>Classic</Text>
          <Separator size={1} />
          <RaisedButton label="Button1" type="classic" onClick={handleClick} />
          <Separator size={2} />
        </div>
        <div>
          <Text>Primary</Text>
          <Separator size={1} />
          <RaisedButton label="Button2" type="primary" onClick={handleClick} />
          <Separator size={2} />
        </div>
        <div>
          <Text>Danger</Text>
          <Separator size={1} />
          <RaisedButton label="Button3" type="danger" onClick={handleClick} />
          <Separator size={2} />
        </div>
      </GridContainer>
    </>
  )
}

export default ButtonsPage
