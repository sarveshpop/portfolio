import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Layout, Hero, About, /* Jobs, */ Featured, /* Projects, */ Contact } from '@components';
import Particles from 'react-tsparticles';

const StyledMainContainer = styled.main`
  counter-reset: section;
`;

const IndexPage = ({ location }) => (
  <Layout location={location}>
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
    <Particles
      className="particles"
      id="tsparticles"
      options={{
        background: {
          color: {
            value: 'transparent',
          },
        },
        fpsLimit: 60,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: 'push',
            },
            onHover: {
              enable: true,
              mode: 'repulse',
            },
            resize: true,
          },
          modes: {
            push: {
              quantity: 2,
            },
            repulse: {
              distance: 100,
              duration: 1,
              easing: 'ease-out-cubic',
              factor: 50,
              speed: 0.5,
              maxSpeed: 1,
            },
          },
        },
        particles: {
          color: {
            value: '#ffffff',
          },
          links: {
            enable: false,
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: 'none',
            enable: true,
            outMode: 'bounce',
            random: false,
            speed: 0.4,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              value_area: 1000,
            },
            value: 40,
          },
          opacity: {
            value: 0.4,
          },
          shape: {
            type: 'circle',
          },
          size: {
            random: true,
            value: 2.25,
          },
          twinkle: {
            particles: {
              enable: true,
              frequency: 0.01,
              opacity: 1,
            },
          },
        },
        detectRetina: true,
      }}
    />
    <StyledMainContainer className="fillHeight">
      <Hero />
      <About />
      {/* <Jobs /> */}
      <Featured />
      {/* <Projects /> */}
      <Contact />
    </StyledMainContainer>
  </Layout>
);

IndexPage.propTypes = {
  location: PropTypes.object.isRequired,
};

export default IndexPage;
