import { useRouteError } from 'react-router-dom'
import Wrapper from '../assets/wrappers/ErrorPage'

const Error = () => {
  const error = useRouteError()
  console.log(error)

  if (error.status === 404) {
    return (
      <Wrapper>
        <h3>Ooops. We don't seem to find that page</h3>
      </Wrapper>
    )
  }

  return
}
export default Error
