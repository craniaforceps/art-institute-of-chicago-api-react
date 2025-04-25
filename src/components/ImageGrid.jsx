import ImageCard from './ImageCard'

const ImageGrid = ({ artwork }) => {
  console.log(artwork)
  return (
    <section className="image-container">
      {artwork.map((item) => {
        return <ImageCard key={item.id} {...item} />
      })}
    </section>
  )
}
export default ImageGrid
