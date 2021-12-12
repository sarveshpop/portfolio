import { createGlobalStyle } from 'styled-components';
import fonts from './fonts';
import variables from './variables';
import TransitionStyles from './TransitionStyles';
import PrismStyles from './PrismStyles';

const GlobalStyle = createGlobalStyle`
  ${fonts};
  ${variables};

  html {
    box-sizing: border-box;
    width: 100%;
    scroll-behavior: smooth;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  ::selection {
    background-color: var(--lightest-navy);
    color: var(--lightest-slate);
  }

  /* Provide basic, default focus styles.*/
  :focus {
    outline: 2px dashed var(--green);
    outline-offset: 3px;
  }

  /*
    Remove default focus styles for mouse users ONLY if
    :focus-visible is supported on this platform.
  */
  :focus:not(:focus-visible) {
    outline: none;
    outline-offset: 0px;
  }

  /*
    Optionally: If :focus-visible is supported on this
    platform, provide enhanced focus styles for keyboard
    focus.
  */
  :focus-visible {
    outline: 2px dashed var(--green);
    outline-offset: 3px;
  }

  /* Scrollbar Styles */
  html {
    scrollbar-width: thin;
    scrollbar-color: var(--dark-slate) var(--navy);
  }
  body::-webkit-scrollbar {
    background-color: transparent;
    width: 12px;
  }
  body::-webkit-scrollbar-track {
    background: var(--navy);

  }
  body::-webkit-scrollbar-thumb {
    background-color: var(--dark-slate);
    border: 3px solid var(--navy);
    border-radius: 6px;
  }

  body {
    margin: 0;
    width: 100%;
    min-height: 100%;
    overflow-x: hidden;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    background: linear-gradient(45deg, #1B082E, #041026);
    background-size: 400% 400%;
    -webkit-animation: bgGradient 30s ease infinite;
    -moz-animation: bgGradient 30s ease infinite;
    animation: bgGradient 30s ease infinite;
    color: var(--slate);
    font-family: var(--font-sans);
    font-size: var(--fz-xl);
    line-height: 1.3;

    @media (max-width: 480px) {
      font-size: var(--fz-lg);
    }

    &.hidden {
      overflow: hidden;
    }

    &.blur {
      overflow: hidden;

      header {
        background-color: transparent;
      }

      #content > * {
        filter: blur(5px) brightness(0.7);
        transition: var(--transition);
        pointer-events: none;
        user-select: none;
      }
    }
  }

  @-webkit-keyframes bgGradient {
      0%{background-position:92% 0%}
      50%{background-position:9% 100%}
      100%{background-position:92% 0%}
  }
  @-moz-keyframes bgGradient {
      0%{background-position:92% 0%}
      50%{background-position:9% 100%}
      100%{background-position:92% 0%}
  }
  @keyframes bgGradient {
      0%{background-position:92% 0%}
      50%{background-position:9% 100%}
      100%{background-position:92% 0%}
  }

  #root {
    min-height: 100vh;
    display: grid;
    grid-template-rows: 1fr auto;
    grid-template-columns: 100%;
  }

  main {
    margin: 0 auto;
    width: 100%;
    max-width: 1600px;
    min-height: 100vh;
    padding: 200px 150px;

    @media (max-width: 1080px) {
      padding: 200px 100px;
    }
    @media (max-width: 768px) {
      padding: 150px 50px;
    }
    @media (max-width: 480px) {
      padding: 125px 25px;
    }

    &.fillHeight {
      padding: 0 150px;

      @media (max-width: 1080px) {
        padding: 0 100px;
      }
      @media (max-width: 768px) {
        padding: 0 50px;
      }
      @media (max-width: 480px) {
        padding: 0 25px;
      }
    }
  }

  section {
    margin: 0 auto;
    padding: 110px 0;
    max-width: 1000px;

    @media (max-width: 768px) {
      padding: 90px 0;
    }

    @media (max-width: 480px) {
      padding: 70px 0;
    }
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0 0 10px 0;
    font-weight: 600;
    color: var(--white);
    line-height: 1.1;
  }

  .big-heading {
    margin: 0;
    font-size: clamp(40px, 8vw, 80px);
  }

  .medium-heading {
    margin: 0;
    font-size: clamp(25px, 4vw, 35px);
    font-weight: 400 !important;
  }

  .numbered-heading {
    display: flex;
    color: var(--green);
    align-items: center;
    position: relative;
    margin: 10px 0 40px;
    width: 100%;
    font-size: clamp(26px, 5vw, var(--fz-heading));
    white-space: nowrap;

    &:before {
      position: relative;
      bottom: 4px;
      counter-increment: section;
      content: '0' counter(section) '.';
      margin-right: 10px;
      color: var(--green);
      font-family: var(--font-mono);
      font-size: clamp(var(--fz-md), 3vw, var(--fz-xl));
      font-weight: 400;

      @media (max-width: 480px) {
        margin-bottom: -3px;
        margin-right: 5px;
      }
    }

    &:after {
      content: '';
      display: block;
      position: relative;
      top: -5px;
      width: 400px;
      height: 2px;
      margin-left: 20px;
      background-color: var(--green-tintier);

      @media (max-width: 1080px) {
        width: 200px;
      }
      @media (max-width: 768px) {
        width: 100%;
      }
      @media (max-width: 600px) {
        margin-left: 10px;
      }
    }
  }

  img,
  svg,
  .gatsby-image-wrapper {
    width: 100%;
    max-width: 100%;
    vertical-align: middle;
  }

  img[alt=""],
  img:not([alt]) {
    filter: blur(5px);
  }

  svg {
    width: 100%;
    height: 100%;
    fill: currentColor;
    vertical-align: middle;

    &.feather {
      fill: none;
    }
  }

  a {
    display: inline-block;
    text-decoration: none;
    text-decoration-skip-ink: auto;
    color: inherit;
    position: relative;
    transition: var(--transition);

    &:hover,
    &:focus {
      color: var(--green);
    }

    &.inline-link {
      ${({ theme }) => theme.mixins.inlineLink};
    }
  }

  .next{
    position: absolute;
    bottom: 0;
    width: 100%;
    left: 0;
    margin-right: 50vw;
    text-align: center;

    @media (max-width: 768px) {
        display: none;
      }

    -webkit-animation: bounce-top 1.5s both;
	          animation: bounce-top 1.5s both;
    @-webkit-keyframes bounce-top {
      0% {
        -webkit-transform: translateY(-40px);
                transform: translateY(-40px);
        -webkit-animation-timing-function: ease-in;
                animation-timing-function: ease-in;
        opacity: 1;
      }
      24% {
        opacity: 1;
      }
      40% {
        -webkit-transform: translateY(-20px);
                transform: translateY(-20px);
        -webkit-animation-timing-function: ease-in;
                animation-timing-function: ease-in;
      }
      65% {
        -webkit-transform: translateY(-10px);
                transform: translateY(-10px);
        -webkit-animation-timing-function: ease-in;
                animation-timing-function: ease-in;
      }
      82% {
        -webkit-transform: translateY(-6px);
                transform: translateY(-6px);
        -webkit-animation-timing-function: ease-in;
                animation-timing-function: ease-in;
      }
      93% {
        -webkit-transform: translateY(-4px);
                transform: translateY(-4px);
        -webkit-animation-timing-function: ease-in;
                animation-timing-function: ease-in;
      }
      25%,
      55%,
      75%,
      87% {
        -webkit-transform: translateY(0px);
                transform: translateY(0px);
        -webkit-animation-timing-function: ease-out;
                animation-timing-function: ease-out;
      }
      100% {
        -webkit-transform: translateY(0px);
                transform: translateY(0px);
        -webkit-animation-timing-function: ease-out;
                animation-timing-function: ease-out;
        opacity: 1;
      }
    }
    @keyframes bounce-top {
      0% {
        -webkit-transform: translateY(-40px);
                transform: translateY(-40px);
        -webkit-animation-timing-function: ease-in;
                animation-timing-function: ease-in;
        opacity: 1;
      }
      24% {
        opacity: 1;
      }
      40% {
        -webkit-transform: translateY(-20px);
                transform: translateY(20px);
        -webkit-animation-timing-function: ease-in;
                animation-timing-function: ease-in;
      }
      65% {
        -webkit-transform: translateY(-10px);
                transform: translateY(-10px);
        -webkit-animation-timing-function: ease-in;
                animation-timing-function: ease-in;
      }
      82% {
        -webkit-transform: translateY(-6px);
                transform: translateY(-6px);
        -webkit-animation-timing-function: ease-in;
                animation-timing-function: ease-in;
      }
      93% {
        -webkit-transform: translateY(-4px);
                transform: translateY(-4px);
        -webkit-animation-timing-function: ease-in;
                animation-timing-function: ease-in;
      }
      25%,
      55%,
      75%,
      87% {
        -webkit-transform: translateY(0px);
                transform: translateY(0px);
        -webkit-animation-timing-function: ease-out;
                animation-timing-function: ease-out;
      }
      100% {
        -webkit-transform: translateY(0px);
                transform: translateY(0px);
        -webkit-animation-timing-function: ease-out;
                animation-timing-function: ease-out;
        opacity: 1;
      }
    }

    &:hover, &:focus {
      -webkit-animation: pulsate-fwd 2s ease-in-out infinite both;
	        animation: pulsate-fwd 2s ease-in-out infinite both;

    @-webkit-keyframes pulsate-fwd {
      0% {
        -webkit-transform: scale(1);
                transform: scale(1);
      }
      50% {
        -webkit-transform: scale(1.25);
                transform: scale(1.25);
      }
      100% {
        -webkit-transform: scale(1);
                transform: scale(1);
      }
    }
    @keyframes pulsate-fwd {
      0% {
        -webkit-transform: scale(1);
                transform: scale(1);
      }
      50% {
        -webkit-transform: scale(1.25);
                transform: scale(1.25);
      }
      100% {
        -webkit-transform: scale(1);
                transform: scale(1);
      }
    }


    }
  } 
  
  button {
    cursor: pointer;
    border: 0;
    border-radius: 0;
  }

  .styledButton {
  border:  1.5px solid var(--white);
  background-color: transparent;
  color: var(--white);
  border-radius: 3.5px 0px 0px 3.5px ;
  padding: 10px 15px 5px 15px;
    @media (max-width: 768px) {
    border-radius: 3.5px;
  }

  &:active, &:focus {
    outline:  2px solid var(--white);
   }  
  &:hover, &:focus {
    color: var(--white) !important;
    background: var(--green-tint);
   }

  }

   .styledButtonDisabled {
  border:  1.5px solid grey;
  background-color: transparent;
  color: grey;
  border-radius: 3.5px 0px 0px 3.5px ;
  padding: 10px 15px 5px 15px;
  cursor: pointer;
    @media (max-width: 768px) {
    border-radius: 3.5px;
  }

  }

   .styledDropButton {
  border:  1.5px solid var(--white);
  border-left: none;
  background-color: transparent;
  color: var(--white);
  border-radius: 0px 3.5px 3.5px 0px;
  padding: 5px 0 0px 0;
  &:hover, &:focus {
    background: var(--green-tint);
   }


  }

  .styledSubmit {
  border:  1.5px solid var(--white);
  background-color: transparent;
  color: var(--white);
  font-size: var(--fz-md);
  border-radius: 3.5px;
  padding: 12px 20px 12px 20px;
    @media (max-width: 768px) {
    border-radius: 3.5px;
  }

  &:active, &:focus {
    outline:  2px solid var(--white);
   }  
  &:hover, &:focus {
    color: var(--white) !important;
    background: var(--green-tint);
   }
  }

  .messageInput {
    padding: 15px;
  }
 

  textarea {

  }

  textarea::-webkit-scrollbar {
    width: 10px;
    
}

textarea::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
    
}

textarea::-webkit-scrollbar-thumb {
  background-color: var(--green-tint);
  outline: none;
  border-radius: 10px;
}

  input, textarea {
    background: var(--navy-shadow);
    color: var(--lightest-slate);
    border: solid 2px var(--green-tint);
    border-radius: 4px;
    font-family: var(--font-sans);
    font-size: 22px;
    padding: 10px 10px 5px 10px;
    outline: 0;
    width: 100%;
    resize: none;
    backdrop-filter: blur(5px);
    &::placeholder {
        color: var(--slate);
      }

    &:focus {
      outline: 0;
    }
    &:focus,
    &:active {
      background: #020c1b;
      
      &::placeholder {
        opacity: 0.5;
      }
    }
  }

  p {
    margin: 0 0 15px 0;
    color: var(--lightest-slate);
    @media (max-width: 600px) {
      font-size: 20px;
    }
    @media (max-width: 768px) {
      font-size: 22px;
    }
    &:last-child,
    &:last-of-type {
      margin: 0;
    }

    & > a {
      ${({ theme }) => theme.mixins.inlineLink};
    }

    & > code {
      background-color: var(--light-navy);
      color: var(--white);
      font-size: var(--fz-sm);
      border-radius: var(--border-radius);
      padding: 0.3em 0.5em;
    }
  }

  ul {
    &.fancy-list {
      padding: 0;
      margin: 0;
      list-style: none;
      font-size: var(--fz-lg);
      li {
        position: relative;
        padding-left: 30px;
        margin-bottom: 10px;
        &:before {
          content: '▹';
          position: absolute;
          left: 0;
          color: var(--green);
        }
      }
    }
  }

  blockquote {
    border-left-color: var(--green);
    border-left-style: solid;
    border-left-width: 1px;
    margin-left: 0px;
    margin-right: 0px;
    padding-left: 1.5rem;

    p {
      font-style: italic;
      font-size: 24px;
      
    }
  }

  hr {
    background-color: var(--lightest-navy);
    height: 1px;
    border-width: 0px;
    border-style: initial;
    border-color: initial;
    border-image: initial;
    margin: 1rem;
  }

  code {
    font-family: var(--font-mono);
    font-size: var(--fz-md);
  }

  .skip-to-content {
    ${({ theme }) => theme.mixins.button};
    position: absolute;
    top: auto;
    left: -999px;
    width: 1px;
    height: 1px;
    overflow: hidden;
    z-index: -99;

    &:focus,
    &:active {
      background-color: var(--green);
      color: var(--navy);
      top: 0;
      left: 0;
      width: auto;
      height: auto;
      overflow: auto;
      z-index: 99;
    }
  }

  #logo {
    color: var(--green);
  }

  .overline {
    color: var(--green);
    font-family: var(--font-mono);
    font-size: var(--fz-md);
    font-weight: 400;

  }

  .subtitle {
    color: var(--green);
    margin: 0 0 20px 0;
    font-size: var(--fz-md);
    font-family: var(--font-mono);
    font-weight: 400;
    line-height: 1.5;
    @media (max-width: 1080px) {
      font-size: var(--fz-sm);
    }
    @media (max-width: 768px) {
      font-size: var(--fz-xs);
    }

    a {
      ${({ theme }) => theme.mixins.inlineLink};
      line-height: 1.5;
    }
  }

  .breadcrumb {
    display: flex;
    align-items: center;
    margin-bottom: 50px;
    color: var(--green);

    .arrow {
      display: block;
      margin-right: 10px;
      padding-top: 4px;
    }

    a {
      ${({ theme }) => theme.mixins.inlineLink};
      font-family: var(--font-mono);
      font-size: var(--fz-sm);
      font-weight: 600;
      line-height: 1.5;
      text-transform: uppercase;
      letter-spacing: 0.1em;
    }
  }

  .gatsby-image-outer-wrapper {
    height: 100%;
  }

  ${TransitionStyles};

  ${PrismStyles};
`;

export default GlobalStyle;
