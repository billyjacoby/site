import React from 'react';
import { StyledSection, Container, TextContainer } from './Components';

import { Player } from '@lottiefiles/react-lottie-player';
import { replaceColor } from 'lottie-colorify';

import styled from 'styled-components';

interface SectionProps {
  children: React.ReactNode;
  background?: string;
  style?: React.CSSProperties;
  maxWidth?: string;
  noContainer?: boolean;
  bottomAnimation?: {
    animation: any;
    color?: string;
    adjustPosition?: boolean;
    bottom?: string;
  };
}

export function Section({
  children,
  background,
  style,
  maxWidth,
  noContainer,
  bottomAnimation,
}: SectionProps) {
  const [defaultColor, setDefaultColor] = React.useState('#ffffff');

  function getHexFromCSSVar(cssVar?: string) {
    if (!cssVar) {
      return '#da12bf';
    }
    if (cssVar.startsWith('#')) {
      return cssVar;
    }
    if (typeof window !== 'undefined') {
      const rootEl = window.getComputedStyle(document.querySelector(':root')!);
      const color = rootEl.getPropertyValue(cssVar);
      return color.trim() || '#da12bf';
    }
    return '#da12bf';
  }

  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      setDefaultColor(getHexFromCSSVar('--secondary-background'));
    }
  }, []);
  return (
    <StyledSection background={background} style={style}>
      <Container maxWidth={maxWidth}>
        {noContainer ? (
          <>{children}</>
        ) : (
          <TextContainer>{children}</TextContainer>
        )}
      </Container>
      {bottomAnimation && (
        <LottieContainer
          adjustPosition={bottomAnimation?.adjustPosition || true}
        >
          <LottieBackground
            src={replaceColor(
              '#000000',
              (bottomAnimation?.color &&
                getHexFromCSSVar(bottomAnimation?.color)) ||
                defaultColor,
              bottomAnimation.animation
            )}
            speed={0.25}
            autoplay
            loop
          />
        </LottieContainer>
      )}
    </StyledSection>
  );
}

const LottieContainer = styled.div<{ adjustPosition: boolean }>`
  position: relative;
  bottom: -5px;
  width: 100%;

  ${({ adjustPosition }) =>
    adjustPosition &&
    `
    @media (min-width: 1000px) {
    bottom: -100px;
  }
  @media (min-width: 1200px) {
    bottom: -200px;
  }
  @media (min-width: 1500px) {
    bottom: -300px;
  }
  `};
`;

const LottieBackground = styled(Player)<{ bottom?: string }>`
  position: absolute;
  bottom: ${({ bottom }) => (bottom ? bottom : '0')};
  width: 100%;
  height: auto;
`;
