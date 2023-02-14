import React, { ChangeEvent } from 'react'

import MainLayout from '@/layouts/main/MainLayout'
import { useGetTilesQuery } from '@/features/tiles/services/tilesService'
import Tile from '@/features/tiles/components/Tile'
import { useAppDispatch, useAppSelector } from '@/hooks'
import { Input } from '@mui/material'
import { getFilteredTiles } from '@/features/tiles/reducers/tilesSlice'

const TilesView = () => {
  const dispatch = useAppDispatch()
  const { isLoading } = useGetTilesQuery()
  const { filteredTiles } = useAppSelector(state => state.tiles)

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(getFilteredTiles(event.target.value))
  }

  if (isLoading) {
    return <div>Loading...</div>
  }

  return (
    <MainLayout>
      <Input onChange={handleChange} />
      {filteredTiles.map(tile => (
        <Tile key={tile.id} {...tile} />
      ))}
    </MainLayout>
  )
}

export default TilesView
