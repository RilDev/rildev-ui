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
  padding: 0 20px;
  text-align: center;

  .photo {
    border-radius: 50%;
    overflow: hidden;
    max-width: 400px;
    max-height: 400px;
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
    font-family: 'Roboto Mono', monospace;
    font-weight: bold;
  }

  .site-under-construction {
    font-family: monospace;
    font-size: 20px;
    animation: blink 1s infinite;
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
      <div className={`site-under-construction`}>
        Site Under Construction...
      </div>
    </AppWrapper>
  );
}

export default App;
