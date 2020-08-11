import React from 'react';
import GitHubSVG from './assets/github.svg';
import LinkedInSVG from './assets/linkedin.svg';
import styled from 'styled-components';

const AppWrapper = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: 4rem 20px;
  text-align: center;
  font-family: 'Roboto Mono', monospace;

  h2 {
    margin-bottom: 2rem;
  }

  .photo {
    border-radius: 50%;
    overflow: hidden;
    max-width: 160px;
    max-height: 160px;
    box-shadow: 1px 1px 4px #111111;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .links {
    margin-top: 40px;

    a {
      &:not(:last-child) {
        margin-right: 20px;
      }
    }

    img {
      height: 40px;
    }
  }

  .title {
    font-weight: bold;
  }

  .site-under-construction {
    font-family: monospace;
    font-size: 20px;
    animation: blink 1s infinite;
  }

  .portfolio {
    .item {
      line-height: 1.5;

      .left {
        text-align: left;
      }

      .title {
        font-size: 1.2rem;
        margin-bottom: 1rem;
      }

      .image {
        overflow: hidden;
        height: 150px;
        margin-bottom: 1rem;

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
      .description {
      }
    }
  }

  @keyframes blink {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 100%;
    }
  }
`;

function App() {
  return (
    <AppWrapper>
      <div className={`photo`}>
        <img
          src={`https://avatars2.githubusercontent.com/u/13135150?v=4`}
          alt={``}
        />
      </div>
      <div className={`links`}>
        <a href={`https://github.com/RilDev`} target={`_blank`}>
          <img src={GitHubSVG} alt={''} />
        </a>
        <a href={`https://www.linkedin.com/in/acyril/`} target={`_blank`}>
          <img src={LinkedInSVG} alt={''} />
        </a>
      </div>
      <h1 className={`title`}>Welcome to RilDev's</h1>
      <h2 className={`title`}>Portfolio</h2>
      <div className={`portfolio`}>
        <div className={`item`}>
          <div className={`title left`}>Minimal CSS</div>
          <div className={`image`}>
            <img src={`https://via.placeholder.com/400`} alt={``} />
          </div>
          <div className={`description`}>
            <em>
              Make your prototypes look good with a standard minimal css
              stylesheet!
            </em>
            <div className={`left`}>
              Website URL:{' '}
              <a
                href={`https://rildev.github.io/minimal-css/`}
                target={`_blank`}
              >
                https://rildev.github.io/minimal-css/
              </a>
            </div>
            <div className={`left`}>
              GitHub:{' '}
              <a
                href={`https://github.com/RilDev/minimal-css`}
                target={`_blank`}
              >
                https://github.com/RilDev/minimal-css
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* <div className={`site-under-construction`}> */}
      {/*   Site Under Construction... */}
      {/* </div> */}
    </AppWrapper>
  );
}

export default App;
