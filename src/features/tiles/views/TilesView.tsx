import React from 'react'
import { useGetTilesQuery } from '@/features/tiles/services/tilesService'

const TilesView = () => {
  const { data, isLoading } = useGetTilesQuery()

  if (isLoading) {
    return <div>Loading...</div>
  }

  return (
    <div>
      {data && data.map(tile => (
        <div>
          {tile.title}
        </div>
      ))}
    </div>
  )
}

export default TilesView
