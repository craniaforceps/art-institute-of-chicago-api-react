import { Link } from 'react-router-dom'
import { useGlobalContext } from '../context'
import ImageModal from './ImageModal'
import Wrapper from '../assets/wrappers/ImageCard'

const ImageCard = ({ artist_title, id, image_id, title }) => {
  const { setSelectedImage } = useGlobalContext()
  const imgUrl = `https://www.artic.edu/iiif/2/${image_id}/full/843,/0/default.jpg`
  return (
    <Wrapper>
      <div key={id} className="art-card">
        <div className="img-container">
          <img
            src={imgUrl}
            className="img"
            alt={`${title} by ${artist_title}`}
            onClick={() => setSelectedImage(imgUrl)}
          />
        </div>

        <div className="art-info">
          <p className="artwork-title">{title || 'Untitled'}</p>
          <p className="artist">{artist_title || 'Artist unknown'}</p>
          <Link to={`/artwork/${id}`} className="btn">
            details
          </Link>
          <ImageModal />
        </div>
      </div>
    </Wrapper>
  )
}
export default ImageCard
