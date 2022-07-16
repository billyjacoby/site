import React, { useState, createContext } from 'react';
import PropTypes from 'prop-types';
// import MenuContainerForSlide from './Slide';
import MenuContainerForPush, { AppContainerForPush } from './Push';
// import { MenuContainerForReveal, AppContainerForReveal } from './Reveal';

interface MenuContextType {
  openMenu: () => void;
  closeMenu: () => void;
  toggleMenu: () => void;
  setMenuProps: (newMenProps: any) => void;
}

export const MenuContext = createContext<MenuContextType>({
  openMenu: () => null,
  closeMenu: () => null,
  toggleMenu: () => null,
  setMenuProps: () => null,
});

interface MenuProviderProps {
  MenuComponent: React.ElementType;
  children: React.ReactNode;
  openByDefault?: boolean;
  direction?: 'left' | 'right';
  animation?: 'slide' | 'push' | 'reveal';
  width?: string;
}

const MenuProvider = (props: MenuProviderProps) => {
  const {
    openByDefault = false,
    MenuComponent,
    children,
    width = '250px',
    direction = 'left',
    animation = 'slide',
  } = props;

  const [isMenuOpen, setIsMenuOpen] = useState(openByDefault || false);
  const [menuIsClosing, setMenuIsClosing] = useState(true);
  const [menuProps, _setMenuProps] = useState({});

  const openMenu = () => {
    setIsMenuOpen(true);
    setMenuIsClosing(false);
  };

  const closeMenu = () => {
    setMenuIsClosing(true);
  };

  const toggleMenu = () => {
    if (isMenuOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  };

  const setMenuProps = (newMenuProps: any) => {
    if (JSON.stringify(menuProps) !== JSON.stringify(newMenuProps))
      _setMenuProps(newMenuProps);
  };

  const renderContents = () => (
    <>
      {isMenuOpen && (
        <MenuContainerForPush
          direction={direction}
          width={width}
          menuIsClosing={menuIsClosing}
          setIsMenuOpen={setIsMenuOpen}
        >
          <MenuComponent {...menuProps} />
        </MenuContainerForPush>
      )}
      {children}
    </>
  );

  // const renderContents = () => {
  //   switch (animation) {
  //     case 'push':
  //       return (
  //         <>
  //           {isMenuOpen && (
  //             <MenuContainerForPush
  //               direction={direction}
  //               width={width}
  //               menuIsClosing={menuIsClosing}
  //               setIsMenuOpen={setIsMenuOpen}
  //             >
  //               <MenuComponent {...menuProps} />
  //             </MenuContainerForPush>
  //           )}
  //           <AppContainerForPush
  //             direction={direction}
  //             width={width}
  //             menuIsClosing={menuIsClosing}
  //           >
  //             {children}
  //           </AppContainerForPush>
  //         </>
  //       );
  //     case 'reveal':
  //       return (
  //         <>
  //           {isMenuOpen && (
  //             <MenuContainerForReveal
  //               direction={direction}
  //               width={width}
  //               menuIsClosing={menuIsClosing}
  //               // isMenuOpen={isMenuOpen}
  //             >
  //               <MenuComponent {...menuProps} />
  //             </MenuContainerForReveal>
  //           )}
  //           <AppContainerForReveal
  //             direction={direction}
  //             width={width}
  //             menuIsClosing={menuIsClosing}
  //             setIsMenuOpen={setIsMenuOpen}
  //           >
  //             {children}
  //           </AppContainerForReveal>
  //         </>
  //       );
  //     default:
  //       return (
  //         <>
  //           {isMenuOpen && (
  //             <MenuContainerForSlide
  //               direction={direction}
  //               width={width}
  //               menuIsClosing={menuIsClosing}
  //               setIsMenuOpen={setIsMenuOpen}
  //             >
  //               <MenuComponent {...menuProps} />
  //             </MenuContainerForSlide>
  //           )}
  //           {children}
  //         </>
  //       );
  //   }
  // };

  return (
    <MenuContext.Provider
      value={{ openMenu, closeMenu, toggleMenu, setMenuProps }}
    >
      {renderContents()}
    </MenuContext.Provider>
  );
};

export default MenuProvider;
