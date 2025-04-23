import { useSelector } from 'react-redux'
import Task from '../../components/Task'
import * as S from './styles'
import { RootReducer } from '../../store'

const ToDoList = () => {
  const { items } = useSelector((state: RootReducer) => state.tasks)
  const { term, critery, value } = useSelector(
    (state: RootReducer) => state.filter
  )

  const taskFilter = () => {
    let filtredTasks = items

    if (term !== undefined) {
      filtredTasks = filtredTasks.filter(
        (item) => item.title.toLowerCase().search(term.toLowerCase()) >= 0
      )

      if (critery === 'prioridade') {
        filtredTasks = filtredTasks.filter((item) => item.priority === value)
      } else if (critery === 'status') {
        filtredTasks = filtredTasks.filter((item) => item.status === value)
      }

      return filtredTasks
    } else {
      return items
    }
  }

  const showFilterResult = (amount: number) => {
    let message = ''
    const complement =
      term !== undefined && term.length > 0 ? `e "${term}"` : ''

    if (critery === 'todas') {
      if (amount > 1) {
        message = `${amount} tarefas encontradas com todas ${complement}`
      } else if (amount === 0) {
        message = `nenhuma tarefa encontrada com todas ${complement}`
      } else {
        message = `${amount} tarefa encontrada com todas ${complement}`
      }
    } else {
      if (amount > 1) {
        message = `${amount} tarefas encontradas com "${`${critery} ${value}`}" ${complement}`
      } else if (amount === 0) {
        message = `nenhuma tarefa encontrada com "${`${critery} ${value}`}" ${complement}`
      } else {
        message = `${amount} tarefa encontrada com "${`${critery} ${value}`}" ${complement}`
      }
    }

    return message
  }

  const tasks = taskFilter()
  const message = showFilterResult(tasks.length)

  return (
    <S.Main>
      <S.Result>{message}</S.Result>
      <ul>
        {tasks.map((t) => (
          <li key={t.title}>
            <Task
              title={t.title}
              description={t.description}
              priority={t.priority}
              status={t.status}
              id={t.id}
            />
          </li>
        ))}
      </ul>
    </S.Main>
  )
}

export default ToDoList
