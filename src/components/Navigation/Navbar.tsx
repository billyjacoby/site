import React from 'react';
import styled from 'styled-components';

import { NakedButton, WebsiteName } from '../Components';
import { BiMenuAltLeft } from 'react-icons/bi';
//@ts-ignore
import { MenuContext } from 'react-flexible-sliding-menu';
import { NavigationLinks } from './NavLinks';

export function Navbar() {
  const { toggleMenu } = React.useContext(MenuContext);

  const [isVisible, setIsVisible] = React.useState(false);
  console.log('isVisible', isVisible);
  const [prevScrollPos, setPrevScrollPos] = React.useState(0);

  function handleScroll() {
    if (typeof window !== 'undefined') {
      const currentScrollPos = window.pageYOffset;
      const visible = prevScrollPos > currentScrollPos;

      setIsVisible(visible);
      setPrevScrollPos(currentScrollPos);
    }
  }

  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', handleScroll);

      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, [prevScrollPos, isVisible, handleScroll]);

  return (
    <NavbarContainer isVisible={isVisible}>
      <InnerContainer>
        <LeftContent>
          <WebsiteName>billyjacoby.com</WebsiteName>
          <RightSubtext>tutorials, thoughts, and tech</RightSubtext>
        </LeftContent>
        <RightContent>
          <NavLinks>
            <NavigationLinks />
          </NavLinks>
          <NavButton>
            <BiMenuAltLeft size="64" onClick={toggleMenu} />
          </NavButton>
        </RightContent>
      </InnerContainer>
    </NavbarContainer>
  );
}

const NavButton = styled(NakedButton)`
  @media (min-width: 550px) {
    display: none;
  }
`;

const NavLinks = styled.div`
  width: 75%;
  display: flex;
  margin-left: auto;

  @media (max-width: 550px) {
    display: none;
  }
`;

const LeftContent = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

const RightContent = styled.div`
  width: 75%;
  align-self: flex-end;

  @media (max-width: 550px) {
    align-self: flex-start;
    width: inherit;
  }
`;

const RightSubtext = styled.div`
  font-size: 0.875rem;
`;

const InnerContainer = styled.div`
  max-width: 1200px;
  margin: 0;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
`;

const NavbarContainer = styled.div<{ isVisible: boolean }>`
  transition: all 0.1s ease-in;
  top: ${({ isVisible: visible }) => (visible ? '-1px' : '-100px')};
  z-index: 10;
  position: sticky;
  background: var(--primary-background);
  border-bottom-left-radius: 0.25rem;
  border-bottom-right-radius: 0.25rem;
  height: 100%;
  width: 100%;
`;
