import Wrapper from '../assets/wrappers/AboutPage'

const About = () => {
  return (
    <Wrapper>
      <header>
        <h3>about us</h3>
      </header>
      <div className="about-us-container">
        <div className="img-container">
          <img
            src={`https://www.artic.edu/iiif/2/d23cd8a0-f54b-366d-3c50-955f9889eaf5/full/843,/0/default.jpg`}
            alt="Artwork"
            className="img-artwork"
          />
        </div>

        <div className="about-us-info">
          <h4>.artwork</h4>
          <p>
            This project started as a technical exercise, but I also hope that
            it can help facilitating the access to culture and art for people
            who can’t physically visit museums or art exhibitions. It uses the
            <a href="https://api.artic.edu/docs/">
              {' '}
              Art Institute of Chicago’s API{' '}
            </a>
            to display works from their incredible public collection.
          </p>
          <h4>copyright</h4>
          <p>
            Naturally, none of the artworks shown here are my own, and full
            credit goes to the original artists and the Art Institute of
            Chicago. Wherever possible, copyright information has been included
            alongside each artwork to properly acknowledge its origin and usage
            rights.
          </p>
          <h4>acknowledgements</h4>
          <p>
            Finally, I just want to say that I’m truly grateful to the AIC for
            offering such a well-documented and thoughtfully structured public
            API.
          </p>

          <h4>contact</h4>
          <p>
            This site was built with React as part of my developer portfolio,
            aiming to present real data in a meaningful and visually engaging
            way. You can explore the source code for this project on my
            <a href="https://github.com/craniaforceps"> GitHub</a> .
          </p>
        </div>
      </div>
    </Wrapper>
  )
}
export default About
