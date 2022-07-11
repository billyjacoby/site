import React from 'react';
import { StyledSection, Container, TextContainer } from './Components';

interface SectionProps {
  children: React.ReactNode;
  background?: string;
  style?: React.CSSProperties;
  maxWidth?: string;
  noContainer?: boolean;
}

export function Section({
  children,
  background,
  style,
  maxWidth,
  noContainer,
}: SectionProps) {
  return (
    <StyledSection background={background} style={style}>
      <Container maxWidth={maxWidth}>
        {noContainer ? (
          <>{children}</>
        ) : (
          <TextContainer>{children}</TextContainer>
        )}
      </Container>
    </StyledSection>
  );
}
