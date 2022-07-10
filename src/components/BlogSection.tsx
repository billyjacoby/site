import React from 'react';
import styled from 'styled-components';
import { VariableH2 } from './Components';
import { Section } from './Section';

function BlogCard() {
  return (
    <CardContainer>
      <CardImg src={'https://dummyimage.com/500x500.png'} />
      <CardHeading>Blog Title</CardHeading>
      <CardContent>This is the content of the blog card...</CardContent>
    </CardContainer>
  );
}

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const CardImg = styled.img`
  width: 100%;
  height: auto;
  border: solid 0.25rem var(--accent-2);
  border-radius: 1rem;
`;

const CardHeading = styled.h5`
  padding: 0.5rem 0.25rem 0.5rem 1rem;
  margin: 0;
`;

const CardContent = styled.p`
  padding: 0;
  margin: 0;
`;

export function BlogSection() {
  return (
    <Section>
      <div>
        <VariableH2>Recent Blog Posts</VariableH2>
        <BlogCardContainer>
          <BlogCard />
          <BlogCard />
          <BlogCard />
        </BlogCardContainer>
      </div>
    </Section>
  );
}

const BlogCardContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding: 1rem;
  gap: 1.5rem;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;
