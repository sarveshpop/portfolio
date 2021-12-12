import React, { useEffect, useRef } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import { srConfig } from '@config';
import sr from '@utils/sr';
import { usePrefersReducedMotion } from '@hooks';
import MaterialIcon from 'react-google-material-icons';

const StyledAboutSection = styled.section`
  max-width: 900px;

  .inner {
    display: grid;
    grid-template-columns: 3fr 2fr;
    grid-gap: 50px;
    padding-bottom: 15%;

    @media (max-width: 768px) {
      display: block;
    }

    .resumeSection {
      position: absolute;
      margin: 60px 150px 0 0;
      right: 0;
      @media (max-width: 768px) {
        display: none;
      }
    }
  }

  /* The container <div> - needed to position the dropdown content */
  .dropdown {
    display: inline-block;
    position: absolute;
    @media (max-width: 768px) {
      display: none;
    }
  }

  /* Dropdown Content (Hidden by Default) */
  .dropdown-content {
    display: none;
    position: absolute;
    background-color: rgba(2, 12, 27, 0.5);
    min-width: 148px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    z-index: 1;
    margin-left: -108px;
  }

  /* Links inside the dropdown */
  .dropdown-content a {
    color: var(--white);
    padding: 10px 16px;
    text-decoration: none;
    font-size: var(--fz-md);
    display: block;
  }

  /* Change color of dropdown links on hover */
  .dropdown-content a:hover {
    background-color: var(--green-tint);
  }

  /* Show the dropdown menu on hover */
  .dropdown:hover .dropdown-content {
    display: block;
  }

  .dl {
    padding-left: 10px;
    vertical-align: super !important;
  }
`;

const StyledText = styled.div`
  ul.skills-list {
    display: grid;
    grid-template-columns: repeat(3, minmax(140px, 200px));
    grid-gap: 0 20px;
    padding: 10px 0 0 0;
    margin: 20px 0 0 0;
    overflow: hidden;
    list-style: none;
    @media (max-width: 600px) {
      grid-gap: 0;
      grid-template-columns: repeat(2, minmax(140px, 200px));
    }

    li {
      position: relative;
      margin-bottom: 10px;
      padding-left: 20px;
      font-family: var(--font-mono);
      font-size: var(--fz-md);
      color: var(--green);
      @media (max-width: 600px) {
        font-size: var(--fz-xs);
      }

      &:before {
        content: '▹';
        position: absolute;
        left: 0;
        color: var(--green);
        font-size: var(--fz-sm);
        line-height: normal;
      }
    }
  }
`;
const StyledPic = styled.div`
  position: relative;
  max-width: 300px;

  @media (max-width: 768px) {
    margin: 30px auto 0;
    width: 30%;
  }

  @media (max-width: 600px) {
    display: none;
  }

  .wrapper {
    ${({ theme }) => theme.mixins.boxShadow};
    display: block;
    position: relative;
    width: 100%;
    border-radius: var(--border-radius);
    background-color: var(--green);

    &:hover,
    &:focus {
      background: transparent;
      outline: 0;

      &:after {
        top: 15px;
        left: 15px;
      }

      .img {
        filter: none;
        mix-blend-mode: normal;
      }
    }

    .img {
      position: relative;
      border-radius: var(--border-radius);
      mix-blend-mode: multiply;
      filter: grayscale(100%) contrast(1);
      transition: var(--transition);
    }

    .wrapper,
    .img {
      @media (max-width: 600px) {
        display: none;
      }
    }

    &:before,
    &:after {
      content: '';
      display: block;
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: var(--border-radius);
      transition: var(--transition);
    }

    &:before {
      top: 0;
      left: 0;
      background-color: var(--navy);
      mix-blend-mode: screen;
    }

    &:after {
      border: 2px solid var(--green);
      top: 20px;
      left: 20px;
      z-index: -1;
    }
  }
`;

const About = () => {
  const revealContainer = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    sr.reveal(revealContainer.current, srConfig());
  }, []);

  const skills = [
    'JavaScript',
    'TypeScript',
    'React',
    'Node.js',
    'Python',
    'PHP',
    'SQL',
    'MongoDB',
    'WebGL',
  ];

  return (
    <StyledAboutSection id="about" ref={revealContainer}>
      <h2 className="numbered-heading">About Me</h2>

      <div className="inner">
        <StyledText>
          <div>
            <p>
              Hello! My name is Sarvesh, I am a passionate developer, avid learner, a tech
              enthusiast, and a Full stack developer adept in bringing forth expertise in designing,
              installation, testing and maintenance of web applications and software systems.
              Committed to utilizing my knowledge and skills to make amazing things.
            </p>

            <p>
              I am currently pursuing a B.Tech in Information Technology at{' '}
              <a href="https://shivajiraojondhalecoe.org.in/">SSJ College of Engineering</a>,
              Dombivli East.
            </p>

            <p>Here are a few technologies I’ve been working with recently:</p>
          </div>

          <ul className="skills-list">
            {skills && skills.map((skill, i) => <li key={i}>{skill}</li>)}
          </ul>
        </StyledText>
        <div className="StyledPic">
          <StyledPic>
            <div className="wrapper">
              <StaticImage
                className="img"
                src="../../images/me.jpg"
                width={500}
                quality={70}
                formats={['AUTO', 'WEBP', 'AVIF']}
                alt="Headshot"
              />
            </div>
          </StyledPic>
          <div className="resumeSection">
            <a
              className="styledButton"
              href="/resumePDF.pdf"
              target="_blank"
              rel="noopener noreferrer">
              <span>Resume</span>
            </a>
            <div className="dropdown">
              <button className="styledDropButton">
                <MaterialIcon icon="arrow_drop_down" size={38} />
              </button>
              <div className="dropdown-content">
                <a href="/resumePDF.pdf" target="_blank" rel="noopener noreferrer">
                  <MaterialIcon icon="download" />
                  <span className="dl">PDF</span>
                </a>
                <a href="/resumeTEX.tex" target="_blank" rel="noopener noreferrer">
                  <MaterialIcon icon="download" />
                  <span className="dl">LaTex</span>
                </a>
                <a href="/resumeHTML.html" target="_blank" rel="noopener noreferrer">
                  View as HTML
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <a className="next" href="#projects">
        <MaterialIcon className="nextIcon" icon="expand_more" size={64} />
      </a>
    </StyledAboutSection>
  );
};

export default About;
