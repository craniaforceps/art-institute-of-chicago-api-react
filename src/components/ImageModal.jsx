import { useGlobalContext } from '../context'

const ImageModal = () => {
  const { selectedImage, setSelectedImage } = useGlobalContext()
  return (
    <div>
      {selectedImage && (
        <div className="image-modal" onClick={() => setSelectedImage(null)}>
          <img
            src={selectedImage.replace('/full/843,', '/full/1200,')}
            alt="Ampliada"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  )
}
export default ImageModal
