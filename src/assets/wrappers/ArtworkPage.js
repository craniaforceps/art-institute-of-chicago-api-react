import styled from 'styled-components'

const Wrapper = styled.div`
  header {
    margin-bottom: 3rem;
    justify-items: center;
    text-align: center;
    .btn {
      margin-bottom: 1rem;
      margin: auto 0;
    }
  }

  .artwork {
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

  .btn {
    margin: auto 0;
  }

  .img-artwork {
    max-width: 80%;
    border-radius: var(--borderRadius);
  }
  .artwork-info {
    padding: 0 1rem 1rem 1rem;
  }

  .art-card {
    max-height: 100%;
  }
  .artwork p {
    font-weight: 300;
    text-align: justify;
    line-height: 2;
    margin-bottom: 1rem;
  }
  .artwork-data {
    margin-right: 0.5rem;
    background: var(--primary-300);

    border-radius: var(--borderRadius);
    color: var(--primary-700);
    letter-spacing: var(--letterSpacing);
  }

  @media (min-width: 992px) {
    .artwork {
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
