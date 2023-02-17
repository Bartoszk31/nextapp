import React, { FunctionComponent } from 'react'
import { Button, Grid, TextField } from '@mui/material'
import { useForm } from 'react-hook-form'

import MainLayout from '@/layouts/main/MainLayout'
import { useAppDispatch } from '@/hooks'
import { addTile, searchTiles } from '@/features/tiles/reducers/tilesSlice'
import { TileFormData } from '@/features/tiles/types'
import { useRouter } from 'next/router'
import { toast } from 'react-toastify'

const CreateTileView: FunctionComponent = () => {
  const { push } = useRouter()
  const dispatch = useAppDispatch()
  const { register, handleSubmit } = useForm<TileFormData>({
    defaultValues: {
      title: '',
      description: '',
      imagePath: ''
    }
  })
  const handleAddTile = (data: TileFormData) => {
    dispatch(addTile(data))
    toast.success('Tile created')
    dispatch(searchTiles(''))
    push('/')
  }

  return (
    <MainLayout title="Create tile">
      <form onSubmit={handleSubmit(handleAddTile)}>
        <Grid container justifyContent="center">
          <Grid xs={12} md={6} item>
            <TextField
              label="Title"
              variant="outlined"
              fullWidth
              {...register('title')}
            />
          </Grid>
        </Grid>
        <Grid container justifyContent="center" marginTop={1}>
          <Grid xs={12} md={6} item>
            <TextField
              label="Description"
              multiline
              rows={4}
              fullWidth
              {...register('description')}
            />
          </Grid>
        </Grid>
        <Grid container justifyContent="center" marginTop={1}>
          <Grid xs={12} md={6} item>
            <TextField
              label="Image URL"
              variant="outlined"
              fullWidth
              {...register('imagePath')}
            />
          </Grid>
        </Grid>
        <Grid container justifyContent="center" marginTop={1}>
          <Grid xs={12} md={6} container item justifyContent="end">
            <Button
              variant="contained"
              type="submit"
            >
              Add Tile
            </Button>
          </Grid>
        </Grid>
      </form>
    </MainLayout>
  )
}

export default CreateTileView
