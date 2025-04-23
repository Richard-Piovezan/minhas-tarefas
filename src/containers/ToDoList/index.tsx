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

      if (critery === 'priority') {
        filtredTasks = filtredTasks.filter((item) => item.priority === value)
      } else if (critery === 'status') {
        filtredTasks = filtredTasks.filter((item) => item.status === value)
      }

      return filtredTasks
    } else {
      return items
    }
  }

  return (
    <S.Main>
      <p>
        2 tarefas marcadas como: &quot;categoria&ldquo; e &quot;{term}&ldquo;
      </p>
      <ul>
        <li>{term}</li>
        <li>{critery}</li>
        <li>{value}</li>
      </ul>
      <ul>
        {taskFilter().map((t) => (
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
