import { useState } from 'react'
import { TextInputProps } from 'react-native'
import { InputRoot, InputInput } from './styles'

interface IInputProps extends TextInputProps {}

export interface IInputRootStyleProps {
  isFocused: boolean
}

export function Input(props: IInputProps) {
  const [isFocused, setIsFocused] = useState(false)

  return (
    <InputRoot isFocused={isFocused}>
      <InputInput
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        {...props}
      />
    </InputRoot>
  )
}
