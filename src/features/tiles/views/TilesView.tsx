import React from 'react'

import MainLayout from '@/layouts/main/MainLayout'
import { useGetTilesQuery } from '@/features/tiles/services/tilesService'

const TilesView = () => {
  const { data, isLoading } = useGetTilesQuery()

  if (isLoading) {
    return <div>Loading...</div>
  }

  return (
    <MainLayout>
      {data && data.map(tile => (
        <div>{tile.title}</div>
      ))}
    </MainLayout>
  )
}

export default TilesView
