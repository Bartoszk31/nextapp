import React, { ChangeEvent, FunctionComponent } from 'react'
import { Grid, TextField } from '@mui/material'

import { SearchBarWrapper } from './SearchBar.styled'
import { useAppDispatch } from '@/hooks'
import { searchTiles } from '@/features/tiles/reducers/tilesSlice'

const SearchBar: FunctionComponent = () => {
  const dispatch = useAppDispatch()
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(searchTiles(event.target.value))
  }

  return (
    <>
      <SearchBarWrapper>
        <Grid container spacing={1}>
          <Grid md={4} xs={12} item>
            <TextField
              onChange={handleChange}
              label="Search by title"
              variant="outlined"
              fullWidth
            />
          </Grid>
        </Grid>
      </SearchBarWrapper>
    </>
  )
}

export default SearchBar
