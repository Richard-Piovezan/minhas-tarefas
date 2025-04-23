import { useDispatch, useSelector } from 'react-redux'
import * as S from './styles'
import { changeFilter } from '../../store/reducers/filter'
import * as enums from '../../utils/enums/Task'
import { RootReducer } from '../../store'

export type Props = {
  subtitle: string
  critery: 'priority' | 'status' | 'all'
  value?: enums.Priority | enums.Status
}

const CardFilter = ({ subtitle, critery, value }: Props) => {
  const dispatch = useDispatch()
  const { filter, tasks } = useSelector((state: RootReducer) => state)

  const activeVerify = () => {
    const sameCritery = filter.critery === critery
    const sameValue = filter.value === value

    return sameCritery && sameValue
  }

  const countTasks = () => {
    if (critery === 'all') return tasks.items.length
    if (critery === 'priority') {
      return tasks.items.filter((item) => item.priority === value).length
    }
    if (critery === 'status') {
      return tasks.items.filter((item) => item.status === value).length
    }
  }

  const filtrate = () => {
    dispatch(
      changeFilter({
        critery,
        value
      })
    )
  }

  const active = activeVerify()
  const count = countTasks()

  return (
    <S.Card active={active} onClick={filtrate}>
      <S.Count>{count}</S.Count>
      <S.Label>{subtitle}</S.Label>
    </S.Card>
  )
}

export default CardFilter
