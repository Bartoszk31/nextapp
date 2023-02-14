import { configureStore } from '@reduxjs/toolkit'

import { tilesApi } from '@/features/tiles/services/tilesService'
import tilesSlice from '@/features/tiles/reducers/tilesSlice'

const store = configureStore({
  reducer: {
    [tilesApi.reducerPath]: tilesApi.reducer,
    [tilesSlice.name]: tilesSlice.reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(tilesApi.middleware)
})

export default store

export type AppState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
