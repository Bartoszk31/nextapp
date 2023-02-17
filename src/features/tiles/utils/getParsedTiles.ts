import { v4 as uuidv4 } from 'uuid'

import { TilesResponse } from '@/features/tiles/types'

const getParsedTiles = (tiles: TilesResponse) => tiles.map(tile => {
  const imagePath = new URL(tile.imagePath.replaceAll('&amp;', '&'))
  imagePath.searchParams.set('w', '400')
  imagePath.searchParams.set('q', '60')

  return {
    title: tile.title.replaceAll('&amp;', '&'),
    description: tile.description.replaceAll('&amp;', '&'),
    imagePath: imagePath.toString(),
    id: uuidv4()
  }
})

export default getParsedTiles
