import React, { useState } from 'react';
import styled from 'styled-components';
import { Icon } from '@components/icons';
import { socialMedia } from '@config';

const StyledContactSection = styled.section`
  max-width: 600px;
  margin: 0 auto 100px;
  text-align: center;

  @media (max-width: 768px) {
    margin: 0 auto 50px;
  }

  .overline {
    display: block;
    margin-bottom: 20px;
    color: var(--green);
    font-family: var(--font-mono);
    font-size: var(--fz-md);
    font-weight: 400;

    &:before {
      bottom: 0;
      font-size: var(--fz-sm);
    }

    &:after {
      display: none;
    }
  }

  .title {
    font-size: clamp(40px, 5vw, 60px);
    padding: 10px 0 0px 0;
  }

  .email-link {
    ${({ theme }) => theme.mixins.bigButton};
    margin-top: 50px;
  }

  .socialText {
    padding-top: 20px;
    padding-bottom: 10px;
  }
`;

const StyledSocialList = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 0;
  padding: 10px 0 30px 0;
  list-style: none;

  .social {
    width: 70px;
    padding: 0px 15px 0 15px;
  }

  }`;

const ContactForm = () => {
  const [status, setStatus] = useState('Send');
  const handleSubmit = async e => {
    e.preventDefault();
    setStatus('Sending...');
    const { name, email, message } = e.target.elements;
    const details = {
      name: name.value,
      email: email.value,
      message: message.value,
    };
    const response = await fetch('http://localhost:5000/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify(details),
    });
    setStatus('Submit');
    const result = await response.json();
    alert(result.status);
  };

  return (
    <StyledContactSection id="contact">
      <h2 className="numbered-heading overline ver2">Contact</h2>

      <h2 className="title">Get In Touch</h2>
      <p className="socialText">You can find me on:</p>
      <div>
        <StyledSocialList>
          {socialMedia &&
            socialMedia.map(({ url, name }, i) => (
              <li key={i}>
                <a className="social" href={url} aria-label={name} target="_blank" rel="noreferrer">
                  <Icon name={name} />
                </a>
              </li>
            ))}
        </StyledSocialList>
      </div>

      <p className="socialText">OR</p>

      <p className="socialText">Send me a message! My inbox is always open.</p>

      <form onSubmit={handleSubmit} data-netlify="true">
        <div className="messageInput">
          <input type="text" id="name" placeholder="Name" maxLength={64} required />
        </div>
        <div className="messageInput">
          <input type="email" id="email" placeholder="Email" maxLength={64} required />
        </div>
        <div className="messageInput">
          <textarea id="message" placeholder="Message" maxLength={420} rows={5} required />
        </div>
        <br></br>
        <button className="styledSubmit" type="submit">
          {status}
        </button>
      </form>
    </StyledContactSection>
  );
};

export default ContactForm;
