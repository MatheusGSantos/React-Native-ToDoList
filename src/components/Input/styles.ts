import { ColorValue, TextInput } from 'react-native'
import styled, { css } from 'styled-components/native'
import { IInputRootStyleProps } from '.'

export const InputRoot = styled.View<IInputRootStyleProps>`
  ${({ theme, isFocused }) => css`
    flex: 1;
    flex-direction: row;
    background-color: ${theme.COLORS.GRAY_500};
    border: 1px solid
      ${isFocused ? theme.COLORS.PURPLE_DARK : theme.COLORS.GRAY_700};
    border-radius: 8px;
    justify-content: center;
    padding: 16px;
    height: 54px;
    transition: border-color 0.2s;
  `}
`

export const InputInput = styled(TextInput).attrs(({ theme }) => ({
  placeholderTextColor: theme.COLORS.GRAY_300 as ColorValue,
}))`
  flex: 1;
  font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;
  color: ${({ theme }) => theme.COLORS.GRAY_100};
`
