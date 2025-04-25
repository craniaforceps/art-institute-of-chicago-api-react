import { useLoaderData, Navigate, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useQuery } from '@tanstack/react-query'
import Wrapper from '../assets/wrappers/ArtworkPage'

const singleArtworkUrl = 'https://api.artic.edu/api/v1/artworks/'

const singleArtworkQuery = (id) => {
  return {
    queryKey: ['artwork', id],
    queryFn: async () => {
      try {
        const { data } = await axios.get(`${singleArtworkUrl}${id}`)
        console.log('Fetched data:', data)
        return data
      } catch (error) {
        console.error(
          'Error fetching artwork data:',
          error.response || error.message
        )
        throw error // Re-throw the error after logging
      }
    },
  }
}

export const loader = (queryClient) => {
  return async ({ params }) => {
    const { id } = params
    console.log('Artwork ID:', id)
    if (!id) {
      throw new Error('Invalid artwork ID')
    }
    await queryClient.ensureQueryData(singleArtworkQuery(id))
    return { id }
  }
}

const Artwork = () => {
  const { id } = useLoaderData()
  const navigate = useNavigate()
  if (!id) {
    return <div>Error: Invalid artwork ID.</div>
  }
  const { data, error, isLoading } = useQuery(singleArtworkQuery(id))
  console.log('API response data:', data)
  if (isLoading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Error loading artwork</div>
  }

  const singleArtwork = data?.data // Assuming data is an object with a 'data' key

  if (!singleArtwork) {
    return <div>Artwork not found</div>
  }

  const {
    title,
    alt_text,
    has_not_been_viewed_much,
    date_display,
    artist_display,
    place_of_origin,
    description,
    short_description,
    dimensions,
    medium_display,
    is_public_domain,

    copyright_notice,
    artwork_type_title,
    department_title,
    artist_title,
    category_titles,
    theme_titles,
    image_id,
  } = singleArtwork

  const imgUrl = `https://www.artic.edu/iiif/2/${image_id}/full/843,/0/default.jpg`
  return (
    <Wrapper>
      <header>
        <div className="btn-container">
          <button onClick={() => navigate(-1)} className="btn">
            back home
          </button>
        </div>

        <h3>{singleArtwork?.title}</h3>
        <h3>{singleArtwork?.artist_title}</h3>
      </header>

      <div className="artwork">
        <div className="img-container">
          {singleArtwork?.image_id && (
            <img
              src={`https://www.artic.edu/iiif/2/${singleArtwork.image_id}/full/843,/0/default.jpg`}
              alt={singleArtwork?.alt_text || 'Artwork'}
              className="img-artwork"
            />
          )}
        </div>

        <div className="artwork-info">
          <p>
            <span className="artwork-data">artwork:</span>
            {singleArtwork?.title}
          </p>
          <p>
            <span className="artwork-data">artist:</span>
            {singleArtwork?.artist_title}
          </p>
          <p>
            <span className="artwork-data">lifespan:</span>
            {singleArtwork?.artist_display
              ?.replace(/[()]/g, '')
              .split(',')
              .pop()
              .trim()}
          </p>
          <p>
            <span className="artwork-data">place of origin:</span>
            {singleArtwork?.place_of_origin}
          </p>
          <p>
            <span className="artwork-data">date:</span>
            {singleArtwork?.date_display}
          </p>
          <p>
            <span className="artwork-data">description:</span>
            {singleArtwork?.description?.replace(/<[^>]*>/g, '')}
          </p>
          <p>
            <span className="artwork-data">specifications:</span>
            {singleArtwork?.dimensions}, {singleArtwork?.medium_display}
          </p>
          <p>
            <span className="artwork-data">copyright:</span>
            {singleArtwork?.is_public_domain
              ? 'Public Domain'
              : copyright_notice || 'Not in the public domain'}
          </p>
        </div>
      </div>
    </Wrapper>
  )
}
export default Artwork
