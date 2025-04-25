import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { useGlobalContext } from '../context'
import ImageGrid from './ImageGrid'

const url = 'https://api.artic.edu/api/v1/artworks'

const Gallery = () => {
  //passamos o searchTerm definido no context.jsx
  const { searchTerm } = useGlobalContext()
  const response = useQuery({
    queryKey: ['artworks', searchTerm],
    queryFn: async () => {
      const result = await axios.get(
        `${url}/search?q=${searchTerm}&fields=id,title,artist_title,image_id,thumbnail,short_description&limit=90&page=2`
      )

      return result.data
    },
  })

  if (response.isLoading) {
    return (
      <section className="image-container">
        <h4>Loading</h4>
      </section>
    )
  }
  if (response.isError) {
    return (
      <section className="image-container">
        <h4>Error</h4>
      </section>
    )
  }
  // console.log(response)
  // console.log(response.data)
  // console.log(response.data.data)

  const artwork = response.data.data

  if (artwork.length === 0) {
    return (
      <section className="image-container">
        <h4>No results</h4>
      </section>
    )
  }

  return (
    <>
      <ImageGrid artwork={artwork} />
    </>
  )
}
export default Gallery
