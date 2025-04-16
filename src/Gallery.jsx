import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { useGlobalContext } from './context'

const url = 'https://api.artic.edu/api/v1/artworks'

const Gallery = () => {
  //passamos o searchTerm definido no context.jsx
  const { searchTerm, selectedImage, setSelectedImage } = useGlobalContext()
  const response = useQuery({
    queryKey: ['artworks', searchTerm],
    queryFn: async () => {
      const result = await axios.get(
        `${url}/search?q=${searchTerm}&fields=id,title,artist_title,image_id,thumbnail,short_description&limit=100`
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
  console.log(response)
  console.log(response.data)
  console.log(response.data.data)

  const results = response.data.data

  if (response.data.length === 0) {
    return (
      <section className="image-container">
        <h4>No results</h4>
      </section>
    )
  }

  return (
    <>
      <section className="image-container">
        {results.map((item) => {
          const imgUrl = `https://www.artic.edu/iiif/2/${item.image_id}/full/843,/0/default.jpg`
          return (
            <div key={item.id} className="art-card">
              <img
                src={imgUrl}
                className="img"
                alt={`${item.title} by ${item.artist_title}`}
                onClick={() => setSelectedImage(imgUrl)}
              />
              <div className="art-info">
                <p className="artist">
                  {item.artist_title || 'Artist unknown'}
                </p>
                <p className="artwork-title">{item.title || 'Untitled'}</p>
                <p className="artwork-title">
                  {item.short_description || 'Untitled'}
                </p>
              </div>
            </div>
          )
        })}
      </section>
      {selectedImage && (
        <div className="image-modal" onClick={() => setSelectedImage(null)}>
          <img
            src={selectedImage.replace('/full/843,', '/full/1200,')}
            alt="Ampliada"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  )
}
export default Gallery
