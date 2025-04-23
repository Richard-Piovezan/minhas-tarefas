import { useDispatch, useSelector } from 'react-redux'
import CardFilter from '../../components/CardFilter'
import * as S from './styles'
import { RootReducer } from '../../store'
import { changeTerm } from '../../store/reducers/filter'
import * as enums from '../../utils/enums/Task'

const SideBar = () => {
  const dispatch = useDispatch()
  const { term } = useSelector((state: RootReducer) => state.filter)

  return (
    <S.ASide>
      <div>
        <S.Field
          type="text"
          placeholder="Buscar"
          value={term}
          onChange={(e) => dispatch(changeTerm(e.target.value))}
        />
        <S.Filters>
          <CardFilter
            value={enums.Priority.URGENT}
            critery="priority"
            subtitle="urgentes"
          />
          <CardFilter
            value={enums.Status.COMPLETED}
            critery="status"
            subtitle="concluídas"
          />
          <CardFilter
            value={enums.Priority.IMPORTANT}
            critery="priority"
            subtitle="importantes"
          />
          <CardFilter
            value={enums.Status.PENDING}
            critery="status"
            subtitle="pendentes"
          />
          <CardFilter
            value={enums.Priority.NEUTRAL}
            critery="priority"
            subtitle="neutras"
          />
          <CardFilter critery="all" subtitle="todas" />
        </S.Filters>
      </div>
    </S.ASide>
  )
}

export default SideBar
