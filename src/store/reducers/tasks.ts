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
    },
    register: (state, action: PayloadAction<Omit<Task, 'id'>>) => {
      const taskAlreadyExist = state.items.find(
        (task) =>
          task.title.toLowerCase() === action.payload.title.toLowerCase()
      )

      if (taskAlreadyExist) {
        alert('Parece que já existe uma tarefa com este nome...')
      } else {
        const lastTask = state.items[state.items.length - 1]

        const newTask = {
          ...action.payload,
          id: lastTask ? lastTask.id + 1 : 1
        }
        state.items.push(newTask)
      }
    },
    changeStatus: (
      state,
      action: PayloadAction<{ id: number; finished: boolean }>
    ) => {
      const indexOfTask = state.items.findIndex(
        (t) => t.id === action.payload.id
      )

      if (indexOfTask >= 0) {
        state.items[indexOfTask].status = action.payload.finished
          ? enums.Status.COMPLETED
          : enums.Status.PENDING
      }
    }
  }
})

export const { remove, edit, register, changeStatus } = SliceTasks.actions

export default SliceTasks.reducer
