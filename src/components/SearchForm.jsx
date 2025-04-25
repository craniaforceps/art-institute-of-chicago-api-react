import AdvancedFilters from './AdvancedFilters'
import { useGlobalContext } from '../context'
import { Form, useNavigation } from 'react-router-dom'

const SearchForm = () => {
  const navigation = useNavigation() //added
  const isSubmitting = navigation.state === 'submitting' //added

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
      <div>
        <Form className="search-form" onSubmit={handleSubmit}>
          <input
            type="search"
            className="form-input search-input"
            name="search"
            placeholder="Search by author or artwork"
            defaultValue=""
          />
          <button type="submit" className="btn" disabled={isSubmitting}>
            {isSubmitting ? 'searching..' : 'search'}
          </button>
        </Form>
        <div className="btn-container">
          <button className="btn btn-filters" onClick={toggleAdvancedFilters}>
            Advanced Filters
          </button>
        </div>
      </div>

      {showAdvancedFilters ? <AdvancedFilters /> : null}
    </section>
  )
}
export default SearchForm
