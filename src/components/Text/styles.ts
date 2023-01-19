import styled, { css } from 'styled-components/native'
import { ICustomStyleProps } from '.'

export const Container = styled.View``

export const StyledText = styled.Text<ICustomStyleProps>`
  ${({ theme, size, fontWeight, color }) => css`
    font-size: ${theme.FONT_SIZE[
      size ? (size.toUpperCase() as keyof typeof theme.FONT_SIZE) : 'MD'
    ]}px;
    font-family: ${theme.FONT_FAMILY[
      fontWeight
        ? (fontWeight.toUpperCase() as keyof typeof theme.FONT_FAMILY)
        : 'REGULAR'
    ]};
    color: ${theme.COLORS[
      color ? (color.toUpperCase() as keyof typeof theme.COLORS) : 'GRAY_400'
    ]};
  `}
`
