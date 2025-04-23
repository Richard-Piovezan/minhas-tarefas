import { configureStore } from '@reduxjs/toolkit'
import reducerTasks from './reducers/tasks'
import reducerFilter from './reducers/filter'
const store = configureStore({
  reducer: {
    tasks: reducerTasks,
    filter: reducerFilter
  }
})

export type RootReducer = ReturnType<typeof store.getState>

export default store
