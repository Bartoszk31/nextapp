import getParsedTiles from '@/features/tiles/utils/getParsedTiles'

const data = [
  {
    title: 'Up &amp; down',
    description: 'Up &amp; down',
    imagePath:
      'https://domain.com/photo-1111-bdbdb4decb5c?auto=format&amp;fit=crop&amp;w=800&amp;q=60'
  }
]

describe('getParsedTiles', () => {
  it('should return parsed tiles data from API response', () => {
    const parsedData = getParsedTiles(data)[0]
    expect(parsedData.imagePath).toEqual('https://domain.com/photo-1111-bdbdb4decb5c?auto=format&fit=crop&w=400&q=60')
    expect(typeof parsedData.id).toBe('string')
    expect(parsedData.id).toHaveLength(36)
    expect(parsedData.title).toEqual('Up & down')
    expect(parsedData.description).toEqual('Up & down')
  })
})
