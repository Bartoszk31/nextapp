import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { TileWithId } from '@/features/tiles/types'
import { tilesApi } from '@/features/tiles/services/tilesService'
import getHashFromObject from '@/utils/getHashFromObject'
import { ITEMS_PER_PAGE } from '@/features/tiles/constants'

type State = {
  tiles: TileWithId[]
  filteredTiles: TileWithId[]
  totalCount: number
  page: number
  searchPhrase: string
}

const initialState: State = {
  tiles: [],
  filteredTiles: [],
  totalCount: 0,
  page: 1,
  searchPhrase: ''
}

const tilesSlice = createSlice({
  name: 'tiles',
  initialState,
  reducers: {
    searchTiles(state, action: PayloadAction<string>) {
      state.searchPhrase = action.payload.toLocaleLowerCase()
      const filteredTiles = state.tiles.filter(
        tile => tile.title.toLocaleLowerCase().includes(state.searchPhrase)
      )
      state.page = 1
      state.totalCount = filteredTiles.length
      state.filteredTiles = filteredTiles.slice(0, ITEMS_PER_PAGE)
    },
    setPage(state, action: PayloadAction<number>) {
      state.page = action.payload
      const filteredTiles = state.tiles.filter(
        tile => tile.title.toLocaleLowerCase().includes(state.searchPhrase)
      )
      state.filteredTiles = filteredTiles.slice((state.page - 1) * ITEMS_PER_PAGE, state.page * ITEMS_PER_PAGE)
    }
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      tilesApi.endpoints.getTiles.matchFulfilled,
      (state, { payload }) => {
        state.tiles = payload.map(tile => {
          const imagePath = new URL(tile.imagePath.replaceAll('&amp;', '&'))
          imagePath.searchParams.set('w', '400')
          imagePath.searchParams.set('q', '60')

          return {
            ...tile,
            imagePath: imagePath.toString(),
            id: getHashFromObject(tile)
          }
        })
        state.totalCount = payload.length
        state.filteredTiles = state.tiles.slice(0, ITEMS_PER_PAGE)
      }
    )
  }
})

export const {
  searchTiles,
  setPage
} = tilesSlice.actions

export default tilesSlice
