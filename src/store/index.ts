import { configureStore } from '@reduxjs/toolkit'
import reducerTasks from './reducers/tasks'

const store = configureStore({
  reducer: {
    tasks: reducerTasks
  }
})

export type RootReducer = ReturnType<typeof store.getState>

export default store
