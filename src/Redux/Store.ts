import { configureStore } from '@reduxjs/toolkit'
import  PaginationSlice  from './slices/PaginationSlice'
import  GidroSlice  from './slices/GidroSlice'
import { useDispatch } from 'react-redux'

export const store = configureStore({
  reducer: {PaginationSlice, GidroSlice},
})

export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()