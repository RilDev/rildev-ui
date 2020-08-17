import React, { useState } from 'react';
import generateHash from 'random-hash';
import GitHubSVG from './assets/github.svg';
import LinkedInSVG from './assets/linkedin.svg';
import ResumeSVG from './assets/resume.svg';
import ResumePDF from './assets/resume.pdf';
import StylizedImg from './assets/stylized.png';
import styled from 'styled-components';

const AppWrapper = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  padding: 4rem 20px;
  text-align: center;
  font-family: 'Roboto Mono', monospace;
  max-width: 43rem;
  margin: auto;

  h2 {
    margin-bottom: 2rem;
  }

  .photo {
    border-radius: 50%;
    overflow: hidden;
    width: 160px;
    height: 160px;
    box-shadow: 1px 1px 4px #111111;
    cursor: pointer;

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
      margin-top: 2rem;
      line-height: 1.5;

      .left {
        text-align: left;
      }

      .title {
        font-size: 1.2rem;
        margin-bottom: 1rem;
      }

      .subtitle {
        font-style: italic;
        margin-bottom: 1rem;
        color: #2f4f4f;
      }

      .image {
        overflow: hidden;
        height: 360px;
        margin-bottom: 2rem;
        display: block;
        box-shadow: 1px 1px 4px #111111;

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
  const [userPicture, setUserPicture] = useState();

  const generateRandomPicture = async () => {
    const generatedHash = generateHash();

    const picture = `https://avatars.dicebear.com/api/male/${generatedHash}.svg?mood[]=happy`;

    setUserPicture(picture);
  };

  return (
    <AppWrapper>
      <div className={`photo`} onClick={() => generateRandomPicture()}>
        <img
          src={
            userPicture
              ? userPicture
              : `https://avatars2.githubusercontent.com/u/13135150?v=4`
          }
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
        <a href={ResumePDF} target={`_blank`}>
          <img src={ResumeSVG} alt={''} />
        </a>
      </div>
      <h1 className={`title`}>Welcome to RilDev's</h1>
      <h2 className={`title`}>Portfolio</h2>
      <div className={`portfolio`}>
        <div className={`item`}>
          <div className={`title left`}>Stylized</div>
          <a
            href={`https://rildev.github.io/stylized/`}
            target={`_blank`}
            className={`image`}
          >
            <img src={StylizedImg} alt={``} />
          </a>
          <div className={`description`}>
            <div className={`subtitle`}>
              Make your prototypes look good with a stylish stylesheet!
            </div>
            <div className={`left`}>
              Website URL:{' '}
              <a href={`https://rildev.github.io/stylized/`} target={`_blank`}>
                https://rildev.github.io/stylized/
              </a>
            </div>
            <div className={`left`}>
              GitHub:{' '}
              <a href={`https://github.com/RilDev/stylized`} target={`_blank`}>
                https://github.com/RilDev/stylized
              </a>
            </div>
            <div className={`left`}>
              NPM Package:{' '}
              <a
                href={`https://github.com/RilDev/stylized/packages/361151`}
                target={`_blank`}
              >
                https://github.com/RilDev/stylized/packages/361151
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
