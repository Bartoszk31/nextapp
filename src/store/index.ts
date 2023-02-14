import { configureStore } from '@reduxjs/toolkit'

import { tilesApi } from '@/features/tiles/services/tilesService'

const store = configureStore({
  reducer: {
    [tilesApi.reducerPath]: tilesApi.reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(tilesApi.middleware)
})

export default store

export type AppState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
