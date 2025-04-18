import Task from '../../components/Task'
import * as S from './styles'

const tasks = [
  {
    title: 'Estudar TypeScript',
    description: 'Assistir à vídeo-aula 3 da EBAC',
    priority: 'importante',
    status: 'pendente'
  },
  {
    title: 'Pagar Faculdade Estácio',
    description: 'Realizar pagamento da fatura da faculdade Estácio',
    priority: 'urgente',
    status: 'concluída'
  },
  {
    title: 'Interagir com futuros clientes',
    description:
      'Interagir, trocar conhecimentos, com potênciais futuros clientes',
    priority: 'importante',
    status: 'pendente'
  }
]

const ToDoList = () => (
  <S.Main>
    <p>(QUANTIDADE) tarefas marcadas como: (CATEGORIA E TERMO)</p>
    <ul>
      {tasks.map((t) => (
        <li key={t.title}>
          <Task
            title={t.title}
            description={t.description}
            priority={t.priority}
            status={t.status}
          />
        </li>
      ))}
    </ul>
  </S.Main>
)

export default ToDoList
