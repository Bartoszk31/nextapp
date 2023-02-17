import React, { FunctionComponent } from 'react'
import { Grid, Typography } from '@mui/material'

import { useAppSelector } from '@/hooks'
import { TilesSectionWrapper } from './TilesSection.styled'
import Tile from '@/features/tiles/components/Tile'

const TilesSection: FunctionComponent = () => {
  const { filteredTiles } = useAppSelector(state => state.tiles)

  return (
    <TilesSectionWrapper>
      {filteredTiles.length === 0 ? (
        <Grid container justifyContent="center">
          <Typography>No results found</Typography>
        </Grid>
      ) : (
        <Grid container spacing={1}>
          {filteredTiles.map(tile => (
            <Grid item md={4} xs={12} key={tile.id}>
              <Tile {...tile} />
            </Grid>
          ))}
        </Grid>
      )}
    </TilesSectionWrapper>
  )
}

export default TilesSection
