import styled from 'styled-components'

const Wrapper = styled.nav`
  .nav-center {
    width: var(--view-width);
    max-width: var(--max-width);
    margin: 0 auto;
    display: flex;
    flex-direction: column;
  }
  .logo {
    font-size: clamp(1.5rem, 1.2vw, 3rem);
    color: var(--primary-500);
    font-weight: 700;
    letter-spacing: 2px;
    margin: 0;
    height: 5px;
  }
  .nav-links {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    margin-top: 1rem;
  }
  .nav-link {
    color: var(--grey-900);
    padding: 0.5rem 0.5rem 0.5rem 0;
    transition: var(--transition);
    letter-spacing: 2px;
  }
  .nav-link:hover {
    color: var(--primary-500);
  }
  .active {
    color: var(--primary-500);
  }
  @media (min-width: 768px) {
    .nav-center {
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      display: flex;
    }
    .nav-links {
      flex-direction: row;
    }
  }
`

export default Wrapper
