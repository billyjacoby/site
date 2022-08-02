import React from 'react';
import styled from 'styled-components';

import { Link } from 'gatsby';

export const NavigationLinks = ({ closeMenu }: { closeMenu?: () => void }) => {
  return (
    <NavLinkList>
      <Link to="/" onClick={closeMenu} style={{ width: '100%' }}>
        <NavLink>Home</NavLink>
      </Link>
      <Link to="/about" onClick={closeMenu} style={{ width: '100%' }}>
        <NavLink>About</NavLink>
      </Link>
      <Link to="/blog" onClick={closeMenu} style={{ width: '100%' }}>
        <NavLink>Blog</NavLink>
      </Link>
    </NavLinkList>
  );
};

const NavLink = styled.div`
  font-size: 1.25rem;
  font-family: Fira;
  font-weight: 800;
  width: 100%;

  @media (max-width: 550px) {
    text-align: center;
    padding: 0.5rem 0rem;
    width: 100%;
    border: solid 1px var(--primary-background);
    background-color: var(--primary-background);
  }
`;

const NavLinkList = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  width: 100%;
  padding: 0;
  text-align: right;

  @media (max-width: 550px) {
    flex-direction: column;
    gap: 0.07rem;
    align-items: flex-end;
  }
`;
