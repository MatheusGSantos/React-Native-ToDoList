import styled from 'styled-components/native'

interface ITaskListContainerProps {
  isEmpty: boolean
}

export const Container = styled.View`
  flex: 1;
`

export const TaskCounterContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 32px;
`

export const TaskListContainer = styled.View.attrs<ITaskListContainerProps>(
  ({ theme, isEmpty }) => ({
    borderColor: theme.COLORS.GRAY_400,
    borderTopWidth: isEmpty ? 1 : 0,
  }),
)`
  flex: 1;
  margin-top: 20px;
  align-items: center;
`
