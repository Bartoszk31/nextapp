type Tile = {
  title: string
  description: string
  imagePath: string
}

type TilesResponse = Tile[]

type TileWithId = Tile & {
  id: string
}

export type {
  Tile,
  TilesResponse,
  TileWithId
}
