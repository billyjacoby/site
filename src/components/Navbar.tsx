import React from 'react';
import styled from 'styled-components';

import { WebsiteName } from './Components';
import { BiMenuAltLeft } from 'react-icons/bi';

export function Navbar() {
  return (
    <NavbarContainer>
      <RightContent>
        <WebsiteName>billyjacoby.com</WebsiteName>
        <RightSubtext>tutorials, thoughts, and tech</RightSubtext>
      </RightContent>
      <BiMenuAltLeft size="64" />
    </NavbarContainer>
  );
}

const RightContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

const RightSubtext = styled.div`
  font-size: 0.875rem;
`;

const NavbarContainer = styled.div`
  height: 100%;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
`;
