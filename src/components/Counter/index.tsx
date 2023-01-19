import { Text } from '@components/Text'
import { View } from 'react-native'
import theme from 'src/global/styles/theme'

import { Container, CounterContainer } from './styles'

interface ICounterProps {
  title: string
  color: Lowercase<keyof typeof theme.COLORS>
  count: number
}

export function Counter({ title, color, count }: ICounterProps) {
  return (
    <Container>
      <View>
        <Text color={color} fontWeight="bold" size="md">
          {title}
        </Text>
      </View>
      <CounterContainer>
        <Text color="gray_200" fontWeight="bold" size="sm">
          {count ?? 0}
        </Text>
      </CounterContainer>
    </Container>
  )
}
