const AdvancedFilters = () => {
  return (
    <div className="filters-container">
      {/* <label htmlFor="image-check">
        Only show artworks with image available
      </label>
      <input type="checkbox" className="form-input check" id="image-check" /> */}

      <label htmlFor="author-search">Search by Author name</label>
      <input
        type="text"
        id="author-search"
        className="form-input search-input"
      />

      <label htmlFor="artwork-search">Search by Artwork name</label>
      <input
        type="text"
        id="artwork-search"
        className="form-input search-input"
      />
    </div>
  )
}
export default AdvancedFilters
