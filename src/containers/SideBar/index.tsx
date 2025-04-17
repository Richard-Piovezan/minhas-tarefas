import CardFilter from '../../components/CardFilter'
import * as S from './styles'

const SideBar = () => (
  <S.ASide>
    <div>
      <S.Field type="text" placeholder="Buscar" />
      <S.Filters>
        <CardFilter subtitle="pendentes" count={1} />
        <CardFilter subtitle="concluídas" count={2} />
        <CardFilter subtitle="urgentes" count={3} />
        <CardFilter subtitle="importantes" count={4} />
        <CardFilter subtitle="neutras" count={5} />
        <CardFilter subtitle="todas" count={15} active />
      </S.Filters>
    </div>
  </S.ASide>
)

export default SideBar
