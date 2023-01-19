import styled from 'styled-components/native'

export const Container = styled.View`
  flex-direction: row;
`

export const CounterContainer = styled.View`
  margin-left: 8px;
  padding: 2px 8px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_400};
  border-radius: 99px;
`
