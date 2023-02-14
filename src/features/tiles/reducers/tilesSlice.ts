import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { TileWithId } from '@/features/tiles/types'
import { tilesApi } from '@/features/tiles/services/tilesService'
import getHashFromObject from '@/utils/getHashFromObject'

type State = {
  tiles: TileWithId[]
  filteredTiles: TileWithId[]
  totalCount: number
  page: number
}

const initialState: State = {
  tiles: [],
  filteredTiles: [],
  totalCount: 0,
  page: 0
}

const tilesSlice = createSlice({
  name: 'tiles',
  initialState,
  reducers: {
    getFilteredTiles(state, action: PayloadAction<string>) {
      state.filteredTiles = state.tiles.filter(
        tile => tile.title.toLocaleLowerCase().includes(action.payload.toLocaleLowerCase())
      )
    }
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      tilesApi.endpoints.getTiles.matchFulfilled,
      (state, { payload }) => {
        state.tiles = payload.map(tile => ({
          ...tile,
          id: getHashFromObject(tile)
        }))
        state.totalCount = payload.length
      }
    )
  }
})

export const {
  getFilteredTiles
} = tilesSlice.actions

export default tilesSlice
