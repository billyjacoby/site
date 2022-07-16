import React from 'react';
import { BiMenuAltLeft } from 'react-icons/bi';
import styled from 'styled-components';

//@ts-ignore
import { MenuContext } from 'react-flexible-sliding-menu';
import { NakedButton, WebsiteName } from '../Components';
import { NavigationLinks } from './NavLinks';

export const NavMenu = () => {
  const { toggleMenu, closeMenu } = React.useContext(MenuContext);
  return (
    <MenuContainer>
      <MenuHeader>
        <WebsiteName>billyjacoby.com</WebsiteName>
        <NakedButton style={{ alignSelf: 'flex-end' }}>
          <BiMenuAltLeft size="64" onClick={toggleMenu} />
        </NakedButton>
      </MenuHeader>
      <NavigationLinks closeMenu={closeMenu} />
    </MenuContainer>
  );
};

const MenuHeader = styled.div`
  margin-left: 0.5rem;
  display: flex;
  justify-content: space-between;
`;

const MenuContainer = styled.div`
  padding-top: 1rem;
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: var(--secondary-background);
  border-left: solid 1px var(--primary-background);
`;
