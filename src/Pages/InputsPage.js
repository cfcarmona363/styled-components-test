import React, { useState } from 'react'
import { Title, Separator, Text, StrongText } from '../styledComponents/Components'
import Input from '../components/Inputs/Input'

const InputsPage = () => {
  const [input1, setInput1] = useState('')
  const [input2, setInput2] = useState('test')

  const inputChange = event => setInput1(event.target.value)
  const input2Change = event => setInput2(event.target.value)

  return (
    <>
      <Title align="left">Inputs</Title>
      <Text>This inputs recive the following props:</Text>
      <Separator size={1} />
      <Text>
        <StrongText>value:</StrongText> The value showed in the input, it could be empty or have a pre-set value
      </Text>
      <Separator size={1} />
      <Text>
        <StrongText>onChange:</StrongText> A callback function that changes the inputs value
      </Text>
      <Separator size={1} />
      <Text>
        <StrongText>label:</StrongText> The label displayed inside or above the button
      </Text>
      <Separator size={1} />
      <Text>
        <StrongText>width:</StrongText> The inputs width. It must be a string and can be of any unit
      </Text>
      <Separator size={1} />
      <Text>
        <StrongText>fontSize:</StrongText> The inputs and labels fontSize. It must be a string and can be of any unit
      </Text>
      <Separator size={2} />
      <Title align="left">Standard input</Title>
      <Input label="Input #1" width={'50%'} fontSize={'1rem'} onChange={inputChange} value={input1} />
      <Separator size={1} />
      <Text>{`Input #1 value: ${input1}`}</Text>
      <Separator size={4} />
      <Title align="left">Input with different width and font size:</Title>
      <Input label="Input #2" width={'30%'} fontSize={'1.5rem'} onChange={input2Change} value={input2} />
      <Separator size={2} />
      <Text>{`Input #2 value: ${input2}`}</Text>
    </>
  )
}

export default InputsPage
