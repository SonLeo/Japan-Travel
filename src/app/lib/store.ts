import { configureStore } from '@reduxjs/toolkit'
import  authSlice, { authReducer } from './features/authSlice'

export const makeStore = () => {
  return configureStore({
    reducer: {
        [authSlice.name]:authReducer,
    },
  })
}

export type AppStore = ReturnType<typeof makeStore>

export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']