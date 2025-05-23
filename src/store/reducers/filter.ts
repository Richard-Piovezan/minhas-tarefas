import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import * as enums from '../../utils/enums/Task'

type FilterState = {
  term?: string
  critery: 'prioridade' | 'status' | 'todas'
  value?: enums.Priority | enums.Status
}

const initialState: FilterState = {
  term: '',
  critery: 'todas'
}

const sliceFilter = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    changeTerm: (state, action: PayloadAction<string>) => {
      state.term = action.payload
    },
    changeFilter: (state, action: PayloadAction<FilterState>) => {
      state.critery = action.payload.critery
      state.value = action.payload.value
    }
  }
})

export const { changeTerm, changeFilter } = sliceFilter.actions

export default sliceFilter.reducer
