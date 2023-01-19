import styled, { css } from 'styled-components/native'

interface ICheckboxContainerProps {
  checked: boolean
}

export const Container = styled.View`
  width: 100%;
  padding: 12px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_500};
  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_400};
  border-radius: 8px;
  flex-direction: row;
  align-items: center;
`

export const CheckboxContainer = styled.View<ICheckboxContainerProps>`
  ${({ theme, checked }) =>
    checked
      ? css`
          background-color: ${theme.COLORS.PURPLE};
        `
      : css`
          border: 2px solid ${theme.COLORS.BLUE};
        `};

  border-radius: 99px;
  width: 18px;
  height: 18px;
  align-items: center;
  justify-content: center;
  padding: 4px;
`
