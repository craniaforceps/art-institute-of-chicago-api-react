import styled from 'styled-components'

const Wrapper = styled.div`
  justify-content: center;
  justify-items: center;
  align-items: center;
  max-width: var(--max-width);
  width: var(--view-width);
  gap: 2rem;

  h3,
  h4 {
    text-transform: capitalize;
    margin-bottom: 1rem;
  }

  h3 {
    margin-bottom: 2rem;
    text-align: center;
  }

  p {
    line-height: 2;
    color: var(--grey-500);
    margin-bottom: 1rem;
    text-align: justify;
    margin-right: 4rem;
  }

  .about-us-container {
    display: grid; /* sempre grid */
    justify-content: center;
    justify-items: center;
    align-items: center;
    max-width: var(--max-width);
    width: var(--view-width);
    margin: 0 auto;
    gap: 2rem;
  }

  .img-container {
    justify-content: center;
    display: flex;
  }

  .img-artwork {
    max-width: 80%;
    border-radius: var(--borderRadius);
  }
  @media (min-width: 992px) {
    .about-us-container {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 3rem;
      align-items: start;
    }

    .img-artwork {
      margin-bottom: 2rem;
      margin-right: -4rem;
    }
  }
`

export default Wrapper
