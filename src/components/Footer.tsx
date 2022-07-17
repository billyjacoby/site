import React from 'react';
import styled from 'styled-components';
import { Container, WebsiteName, StyledLink } from './Components';

import { BsDiscord, BsTwitter, BsLinkedin, BsGithub } from 'react-icons/bs';

export const Footer = () => {
  return (
    <Container maxWidth={1200}>
      <FooterContainer>
        <LeftFooter>
          <WebsiteName>billyjacoby.com</WebsiteName>
          <p>
            thanks for visiting my website. I hope you found something that can
            be at least a little helpful to you in your journey!
          </p>
        </LeftFooter>
        <RightFooter>
          <StyledLink
            href="https://discordapp.com/users/billyjacoby/7369"
            target="_blank"
          >
            <BsDiscord size="36" />
          </StyledLink>
          <StyledLink href="https://twitter.com/billyjacoby" target="_blank">
            <BsTwitter size="36" />
          </StyledLink>
          <StyledLink
            href="https://www.linkedin.com/in/williamjacoby/"
            target="_blank"
          >
            <BsLinkedin size="36" />
          </StyledLink>
          <StyledLink href="https://github.com/billyjacoby" target="_blank">
            <BsGithub size="36" />
          </StyledLink>
        </RightFooter>
      </FooterContainer>
    </Container>
  );
};

const RightFooter = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  z-index: 1;

  @media (max-width: 550px) {
    margin-top: 1rem;
  }
`;

const LeftFooter = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 65%;
  z-index: 1;

  @media (max-width: 550px) {
    max-width: 100%;
    margin-top: 2rem;
    order: 2;
  }
`;

const FooterContainer = styled.div`
  margin: auto;
  width: 100%;
  padding: 1rem 3rem;
  background: var(--primary-background);
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 550px) {
    max-width: 100%;
    flex-direction: column;
  }
`;
