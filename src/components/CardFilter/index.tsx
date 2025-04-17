import * as S from './styles'

export type Props = {
  active?: boolean
  count: number
  subtitle: string
}

const CardFilter = ({ active, count, subtitle }: Props) => (
  <S.Card active={active}>
    <S.Count>{count}</S.Count>
    <S.Label>{subtitle}</S.Label>
  </S.Card>
)

export default CardFilter
