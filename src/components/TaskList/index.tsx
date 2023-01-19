import { useMemo, memo, useCallback } from 'react'

import { Counter } from '@components/Counter'
import { Task } from '@utils/index'

import { Container, TaskCounterContainer, TaskListContainer } from './styles'

import ClipboardIcon from '../../assets/icons/clipboard.svg'
import { Text } from '@components/Text'
import { Card } from '@components/Card'
import { FlatList, View } from 'react-native'

interface ITaskListProps {
  taskList: Task[]
  toggleTaskStateFunction: (id: number) => void
  removeTaskFunction: (id: number) => void
}

function EmptyList() {
  return (
    <TaskListContainer>
      <ClipboardIcon width={56} height={56} style={{ marginTop: 48 }} />
      <Text
        fontWeight="bold"
        color="gray_300"
        size="md"
        style={{ marginTop: 16 }}
      >
        Você ainda não tem tarefas cadastradas
      </Text>
      <Text color="gray_300" size="md">
        Crie tarefas e organize seus itens a fazer
      </Text>
    </TaskListContainer>
  )
}

function Gap({ gap }: { gap: number }) {
  return <View style={{ height: gap }} />
}

export function TaskList({
  taskList,
  toggleTaskStateFunction,
  removeTaskFunction,
}: ITaskListProps) {
  const unfinishedTasksCount = useMemo(
    () => taskList.filter((task) => !task.isCompleted).length,
    [taskList],
  )

  const finishedTasksCount = useMemo(
    () => taskList.filter((task) => task.isCompleted).length,
    [taskList],
  )

  const orderedTaskList = useMemo(() => {
    return taskList.sort((a, b) => {
      if (a.isCompleted && !b.isCompleted) return 1
      if (!a.isCompleted && b.isCompleted) return -1
      return 0
    })
  }, [taskList])

  const GapComponent = useCallback(() => <Gap gap={8} />, [])

  return (
    <Container>
      <TaskCounterContainer>
        <Counter color="blue" title="Criadas" count={unfinishedTasksCount} />
        <Counter color="purple" title="Concluídas" count={finishedTasksCount} />
      </TaskCounterContainer>

      <FlatList
        data={orderedTaskList}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => (
          <Card
            task={item}
            toggleTaskStateFunction={toggleTaskStateFunction}
            removeTaskFunction={removeTaskFunction}
          />
        )}
        ListEmptyComponent={<EmptyList />}
        ItemSeparatorComponent={GapComponent}
        style={{
          marginTop: 20,
        }}
      />
    </Container>
  )
}
