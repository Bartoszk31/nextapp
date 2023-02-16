type TileResponse = {
  title: string
  description: string
  imagePath: string
}

type TilesResponse = TileResponse[]

type Tile = TileResponse & {
  id: string
}

type TileFormData = {
  title: string
  description: string
  imagePath: string
}

export type {
  TilesResponse,
  Tile,
  TileFormData
}
