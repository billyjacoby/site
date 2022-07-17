import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

export const VariableH1 = styled.h1<{
  weight?: number | string;
  slant?: string | number;
}>`
  display: flex;
  align-items: center;
  ${({ weight }) => weight && `font-weight: ${weight};`};
  ${({ slant }) => slant && `font-variation-settings: 'slnt' ${slant};`};
`;

export const VariableH2 = styled.h2<{
  weight?: number | string;
  slant?: string | number;
}>`
  display: flex;
  align-items: center;
  ${({ weight }) => weight && `font-weight: ${weight};`};
  ${({ slant }) => slant && `font-variation-settings: 'slnt' ${slant};`};
`;

export const VariableH4 = styled.h4<{
  weight?: number | string;
  slant?: string | number;
}>`
  display: flex;
  align-items: center;
  ${({ weight }) => weight && `font-weight: ${weight};`};
  ${({ slant }) => slant && `font-variation-settings: 'slnt' ${slant};`};
`;

export const StyledSection = styled.section<{ background?: string }>`
  width: 100%;
  background: ${({ background }) =>
    background ? background : 'var(--primary-background)'};
`;

export const TextContainer = styled.div`
  padding: 5rem 2rem;
  margin: auto;
  display: flex;
  gap: 1rem;
  z-index: 1;

  @media (max-width: 500px) {
    flex-direction: column;
    padding: 1rem 2rem;
  }
`;

export const Container = styled.div<{ maxWidth?: number | string }>`
  max-width: ${({ maxWidth }) =>
    maxWidth
      ? `${typeof maxWidth === 'number' ? `${maxWidth}px` : maxWidth}`
      : '1000px'};
  margin: auto;

  display: flex;
  align-items: center;
`;

export const WebsiteName = ({ children }: { children: React.ReactNode }) => (
  <StyledWebsiteName to="/">{children}</StyledWebsiteName>
);

const StyledWebsiteName = styled(Link)`
  text-decoration: none;
  font-family: Fira;
  font-size: 1.35rem;
  color: var(--accent);
`;

export const Button = styled.button``;

export const StyledLink = styled.a`
  text-decoration: none;
  color: inherit;

  :hover {
    color: var(--accent);
  }
`;

export const NakedButton = styled.button`
  all: unset;

  :hover {
    cursor: pointer;
  }
`;
