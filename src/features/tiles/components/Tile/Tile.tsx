import React, { FunctionComponent } from 'react'
import { Card, CardContent, CardMedia, Typography } from '@mui/material'

type Props = {
  title: string
  description: string
  imagePath: string
}

const Tile: FunctionComponent<Props> = ({ title, description, imagePath }) => {
  return (
    <Card>
      <CardMedia
        component="img"
        height="200"
        image={imagePath}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
    </Card>
  )
}

export default Tile
