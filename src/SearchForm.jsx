import AdvancedFilters from './AdvancedFilters'
import { useGlobalContext } from './context'

const SearchForm = () => {
  const { toggleAdvancedFilters, showAdvancedFilters, setSearchTerm } =
    useGlobalContext()
  const handleSubmit = (e) => {
    e.preventDefault()
    const searchValue = e.target.elements.search.value
    if (!searchValue) return console.log('error')
    setSearchTerm(searchValue)
  }

  return (
    <section>
      <h1 className="title">Art Institute of Chicago</h1>
      <div>
        <form className="search-form" onSubmit={handleSubmit}>
          <input
            type="text"
            className="form-input search-input"
            name="search"
            placeholder="Search by author or artwork"
            defaultValue=""
          />
          <button type="submit" className="btn">
            search
          </button>
        </form>
        {/* <div className="btn-filters-container">
          <button className="btn btn-filters" onClick={toggleAdvancedFilters}>
            Advanced Filters
          </button>
        </div> */}
      </div>

      {/* {showAdvancedFilters ? <AdvancedFilters /> : null} */}
    </section>
  )
}
export default SearchForm
