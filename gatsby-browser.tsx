import React from 'react';
import './src/styles/global.css';
import MenuProvider from 'react-flexible-sliding-menu';

import { NavMenu } from './src/components/Navigation/NavMenu';

export const wrapRootElement = ({ element }) => (
  <MenuProvider
    animation="push"
    MenuComponent={NavMenu}
    direction="right"
    width="100%"
  >
    {element}
  </MenuProvider>
);
