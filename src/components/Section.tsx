import React from 'react';
import { StyledSection, Container, TextContainer } from './Components';

interface SectionProps {
  children: React.ReactNode;
  background?: string;
}

export function Section({ children, background }: SectionProps) {
  return (
    <StyledSection background={background}>
      <Container>
        <TextContainer>{children}</TextContainer>
      </Container>
    </StyledSection>
  );
}
