import { View, Keyboard, TouchableWithoutFeedback } from 'react-native'

import Logo from '@assets/logo.svg'
import PlusIcon from '../../assets/icons/buttons/plus.svg'

import { Container, Header, Content, Button } from './styles'
import { useState, useCallback } from 'react'
import { Input } from '@components/Input'
import { Task } from '@utils/index'
import { TaskList } from '@components/TaskList'

export function Home() {
  const [tasks, setTasks] = useState<Task[]>([])
  const [inputValue, setInputValue] = useState('')

  function handleAddTask() {
    if (inputValue === '') return

    const newTask = {
      id: new Date().getTime(),
      description: inputValue,
      isCompleted: false,
    }

    setTasks([...tasks, newTask])
    setInputValue('')
  }

  const toggleTaskStateFunction = useCallback(
    (id: number) => {
      const updatedTasks = tasks.map((task) => {
        if (task.id === id) {
          return {
            ...task,
            isCompleted: !task.isCompleted,
          }
        }

        return task
      })

      setTasks(updatedTasks)
    },
    [tasks],
  )

  const removeTaskFunction = useCallback(
    (id: number) => {
      const updatedTasks = tasks.filter((task) => task.id !== id)

      setTasks(updatedTasks)
    },
    [tasks],
  )

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Container>
        <Header>
          <Logo />
        </Header>
        <Content>
          <View
            style={{
              flexDirection: 'row',
              width: '100%',
              marginTop: -27,
            }}
          >
            <Input
              placeholder="Adicione uma nova tarefa"
              value={inputValue}
              onChangeText={(data) => setInputValue(data)}
            />
            <Button activeOpacity={0.6} onPress={handleAddTask}>
              <PlusIcon />
            </Button>
          </View>

          <TaskList
            taskList={tasks}
            toggleTaskStateFunction={toggleTaskStateFunction}
            removeTaskFunction={removeTaskFunction}
          />
        </Content>
      </Container>
    </TouchableWithoutFeedback>
  )
}
