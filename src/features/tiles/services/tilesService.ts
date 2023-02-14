import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { TilesResponse } from '@/features/tiles/types'

const tilesApi = createApi({
  reducerPath: 'tilesService',
  baseQuery: fetchBaseQuery({
    baseUrl: '/'
  }),
  endpoints: (builder) => ({
    getTiles: builder.query<TilesResponse, void>({
      query: () => 'api/tiles'
    })
  })
})

const {
  useGetTilesQuery
} = tilesApi

export {
  useGetTilesQuery,
  tilesApi
}
