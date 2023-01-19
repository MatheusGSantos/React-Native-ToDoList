import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  width: 100%;
  align-items: center;
`

export const Header = styled.View`
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
  padding: 70px 0;
  align-items: center;
`

export const Content = styled.View`
  flex: 1;
  width: 100%;
  padding: 0 24px 20px;
`

export const Button = styled.TouchableOpacity`
  border-radius: 6px;
  width: 52px;
  height: 52px;
  background-color: ${({ theme }) => theme.COLORS.BLUE_DARK};
  margin-left: 4px;
  align-items: center;
  justify-content: center;
`
