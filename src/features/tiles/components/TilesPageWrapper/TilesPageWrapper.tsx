import React, { FunctionComponent, PropsWithChildren } from 'react'
import { Box, Button, CircularProgress } from '@mui/material'

import { useGetTilesQuery } from '@/features/tiles/services/tilesService'

const TilesPageWrapper: FunctionComponent<PropsWithChildren> = ({ children }) => {
  const { isLoading, isError, refetch } = useGetTilesQuery()

  if (isLoading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <CircularProgress />
      </Box>
    )
  }

  if (isError) {
    return (
      <div>
        Oops! Something goes wrong.
        <Button
          variant="contained"
          onClick={refetch}
        >
          Try again
        </Button>
      </div>
    )
  }

  return <>{children}</>
}

export default TilesPageWrapper
