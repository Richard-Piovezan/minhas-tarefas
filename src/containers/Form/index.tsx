import { FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { MainContainer, Title, Field, SaveButton } from '../../styles'
import * as S from './styles'
import * as enums from '../../utils/enums/Task'
import { register } from '../../store/reducers/tasks'

const Form = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [priority, setPriority] = useState(enums.Priority.NEUTRAL)

  const registerTask = (e: FormEvent) => {
    e.preventDefault()

    dispatch(
      register({
        title,
        priority,
        description,
        status: enums.Status.PENDING
      })
    )
    navigate('/')
  }

  return (
    <MainContainer>
      <Title>Nova Tarefa</Title>
      <S.Form onSubmit={registerTask}>
        <Field
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          placeholder="Título"
        />
        <Field
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          as="textarea"
          placeholder="Descrição da nova tarefa"
        />
        <S.Options>
          <p>Prioridade</p>
          <input
            onChange={(e) => setPriority(e.target.value as enums.Priority)}
            value={enums.Priority.URGENT}
            name="priority"
            type="radio"
            id="urgent"
          />{' '}
          <label htmlFor="urgent">Urgente</label>
          <input
            onChange={(e) => setPriority(e.target.value as enums.Priority)}
            value={enums.Priority.IMPORTANT}
            name="priority"
            type="radio"
            id="important"
          />{' '}
          <label htmlFor="important">Importante</label>
          <input
            onChange={(e) => setPriority(e.target.value as enums.Priority)}
            value={enums.Priority.NEUTRAL}
            name="priority"
            type="radio"
            id="neutral"
            defaultChecked={priority === enums.Priority.NEUTRAL}
          />{' '}
          <label htmlFor="neutral">Neutra</label>
        </S.Options>
        <SaveButton type="submit">Cadastrar</SaveButton>
      </S.Form>
    </MainContainer>
  )
}

export default Form
