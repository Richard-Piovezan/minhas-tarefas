import { useSelector } from 'react-redux'
import Task from '../../components/Task'
import * as S from './styles'
import { RootReducer } from '../../store'

const ToDoList = () => {
  const { items } = useSelector((state: RootReducer) => state.tasks)

  return (
    <S.Main>
      <ul>
        {items.map((t) => (
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
