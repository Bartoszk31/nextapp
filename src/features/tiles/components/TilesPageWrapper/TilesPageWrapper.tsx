import React, { FunctionComponent, PropsWithChildren } from 'react'
import { CircularProgress } from '@mui/material'

import { useGetTilesQuery } from '@/features/tiles/services/tilesService'

const TilesPageWrapper: FunctionComponent<PropsWithChildren> = ({ children }) => {
  const { isLoading, isError } = useGetTilesQuery()

  if (isLoading) {
    return <CircularProgress />
  }

  if (isError) {
    return <div>Błąd ładowania</div>
  }

  return <>{children}</>
}

export default TilesPageWrapper
