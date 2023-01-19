import { Container, CheckboxContainer } from './styles'

import TrashIcon from '../../assets/icons/buttons/trash.svg'
import CheckIcon from '../../assets/icons/buttons/check.svg'
import { TouchableOpacity, View } from 'react-native'
import { Task } from '@utils/index'
import { Text } from '@components/Text'

interface ICardProps {
  task: Task
  toggleTaskStateFunction: (id: number) => void
  removeTaskFunction: (id: number) => void
}

export function Card({
  task,
  toggleTaskStateFunction,
  removeTaskFunction,
}: ICardProps) {
  return (
    <Container>
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => toggleTaskStateFunction(task.id)}
        style={{
          width: 24,
          height: 24,
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <CheckboxContainer checked={task.isCompleted}>
          {task.isCompleted && <CheckIcon />}
        </CheckboxContainer>
      </TouchableOpacity>

      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          marginLeft: 8,
        }}
      >
        <Text color="gray_100">{task.description}</Text>
      </View>

      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => removeTaskFunction(task.id)}
        style={{
          width: 32,
          height: 32,
          alignItems: 'center',
          justifyContent: 'center',
          marginLeft: 8,
        }}
      >
        <TrashIcon />
      </TouchableOpacity>
    </Container>
  )
}
