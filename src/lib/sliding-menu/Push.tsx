import React, { useEffect, useState } from 'react';

interface PushProps {
  direction: 'left' | 'right';
  width: string;
  menuIsClosing: boolean;
  setIsMenuOpen: (arg: boolean) => void;
  children: React.ReactNode;
}
interface AppContainerPushProps {
  direction: 'left' | 'right';
  width: 'string';
  menuIsClosing: boolean;
  children: boolean;
}

const AppContainerForPush = ({
  direction,
  width,
  menuIsClosing,
  children,
}: AppContainerPushProps) => {
  const appContainerStyles = {
    transform: menuIsClosing
      ? 'translateX(0)'
      : `translateX(${direction === 'right' ? '-' : '+'}${width})`,
    transition: 'transform 0.5s ease',
  };

  return <div style={appContainerStyles}>{children}</div>;
};

const Push = ({
  direction,
  width,
  menuIsClosing,
  setIsMenuOpen,
  children,
}: PushProps) => {
  const [menuIsOpening, setMenuIsOpening] = useState(false);

  const menuContainerStyles = {
    position: 'fixed',
    width,
    zIndex: 999,
    top: 0,
    left: direction === 'right' ? null : 0,
    right: direction === 'right' ? 0 : null,
    height: '100vh',
    background: 'whitesmoke',
    transform: menuIsOpening
      ? 'translateX(0)'
      : `translateX(${direction === 'right' ? '+' : '-'}100%)`,
    transition: 'transform 0.5s ease',
  };

  useEffect(() => {
    setMenuIsOpening(true);
  }, []);

  useEffect(() => {
    if (menuIsClosing) setMenuIsOpening(false);
  }, [menuIsClosing]);

  const onTransitionEnd = (e: any) => {
    if (menuIsClosing && e.currentTarget === e.target) {
      setIsMenuOpen(false);
    }
  };

  return (
    //@ts-ignore
    <div style={menuContainerStyles} onTransitionEnd={onTransitionEnd}>
      {children}
    </div>
  );
};

export { AppContainerForPush };
export default Push;
