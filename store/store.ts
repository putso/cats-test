import { configureStore } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import CatsSlice from './CatsSlice'
import FollowCatsSlice from './FollowCatsSlice'

export const store =  configureStore({
  reducer: {
    followCats: FollowCatsSlice,
    cats: CatsSlice
  },
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector