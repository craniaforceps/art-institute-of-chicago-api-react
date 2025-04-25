import { NavLink } from 'react-router-dom'
import Wrapper from '../assets/wrappers/Navbar'
import ThemeToggle from '../ThemeToggle'

const Navbar = () => {
  return (
    <Wrapper>
      <div className="nav-center">
        <div className="logo">.artwork</div>

        <div className="nav-links">
          <NavLink to="/" className="nav-link">
            Home
          </NavLink>
          <NavLink to="/about" className="nav-link">
            About
          </NavLink>
          <ThemeToggle />
        </div>
      </div>
    </Wrapper>
  )
}
export default Navbar
