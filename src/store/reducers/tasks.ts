import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Task from '../../models/Task'
import * as enums from '../../utils/enums/Task'

type TasksState = {
  items: Task[]
}

const initialState: TasksState = {
  items: [
    {
      id: 1,
      title: 'Estudar REDUX',
      description: 'Rever módulo do projeto da Lista de Tarefas!',
      priority: enums.Priority.IMPORTANT,
      status: enums.Status.PENDING
    },
    {
      id: 2,
      title: 'Preparar marmita',
      description:
        'Separar marmita, frutas e algo mais que queira levar para o dia de amanhã (DEIXAR TUDO PRONTO PARA COLOCAR NA BOLSA).',
      priority: enums.Priority.NEUTRAL,
      status: enums.Status.PENDING
    },
    {
      id: 3,
      title: 'Conferir contas',
      description: 'Ver movimentação de dinheiro nas contas.',
      priority: enums.Priority.URGENT,
      status: enums.Status.COMPLETED
    }
  ]
}

const SliceTasks = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    remove: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((task) => task.id !== action.payload)
    },
    edit: (state, action: PayloadAction<Task>) => {
      const indexOfTask = state.items.findIndex(
        (t) => t.id === action.payload.id
      )

      if (indexOfTask >= 0) {
        state.items[indexOfTask] = action.payload
      }
    }
  }
})

export const { remove, edit } = SliceTasks.actions

export default SliceTasks.reducer
