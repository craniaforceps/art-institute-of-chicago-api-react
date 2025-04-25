import styled from 'styled-components'
const Wrapper = styled.article`
  transition: var(--transition);
  display: grid;
  grid-template-rows: auto 1fr;
  border-radius: var(--borderRadius);

  :hover {
    box-shadow: var(--shadow-4);
  }

  .art-card:hover {
    transform: translateY(-5px);
  }

  .footer {
    padding: 1.5rem;
    h4,
    h5 {
      margin-bottom: 0.5rem;
    }
    h4 {
      font-weight: 700;
    }
    p {
      margin-bottom: 1rem;
      color: var(--grey-500);
    }
  }
  .art-info {
    text-align: center;
  }

  .image-container {
    width: var(--view-width);
    max-width: var(--max-width);
    margin: 3rem auto;
    display: flex;
    gap: 2rem;
    padding: 1rem;
  }

  .art-card {
    flex-direction: column;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;
  }

  .img {
    width: 100%;
    height: 10rem;
    object-fit: cover;
    cursor: pointer;
  }

  .art-info {
    padding: 1rem;
    flex: 1;
    display: flex;
    flex-direction: column;
    max-height: 100%;
  }

  .artist {
    font-weight: bold;
    margin-bottom: 0.5rem;
    color: var(--primary-500);
    font-size: 0.9rem;
    /* Limita texto a 1 linha com ellipsis */
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .artwork-title {
    color: var(--grey-500);
    font-size: 0.8rem;

    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  @media (min-width: 768px) {
    .image-container {
      grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    }
  }

  @media (min-width: 992px) {
    .image-container {
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    }
  }
`

export default Wrapper
