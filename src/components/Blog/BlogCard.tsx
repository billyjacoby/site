import { Link } from 'gatsby';
import Img from 'gatsby-image';
import React from 'react';
import styled from 'styled-components';

interface BlogCardProps {
  slug: string;
  title: string;
  excerpt: string;
  image?: any;
  imgSrc?: string;
}

export function BlogCard({
  slug,
  title,
  excerpt,
  image,
  imgSrc,
}: BlogCardProps) {
  return (
    <Link
      key={slug}
      to={slug}
      style={{
        textDecoration: 'none',
        color: 'inherit',
      }}
    >
      <CardContainer key={slug}>
        {image ? (
          <CardGatsbyImg fluid={image} />
        ) : imgSrc ? (
          <CardImg src={imgSrc} />
        ) : (
          <CardImg src={'https://dummyimage.com/500x500.png'} />
        )}
        <CardHeading>{title}</CardHeading>
        {excerpt && <CardContent>{excerpt}</CardContent>}
      </CardContainer>
    </Link>
  );
}

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
`;

const CardImg = styled.img`
  width: 100%;
  height: auto;
  border: solid 0.25rem var(--accent-2);
  border-radius: 1rem;
`;

const CardGatsbyImg = styled(Img)`
  border: solid 0.25rem var(--accent-2);
  border-radius: 1rem;
  z-index: 10;
`;

const CardHeading = styled.h5`
  padding: 0.5rem 0.25rem 0.5rem 1rem;
  margin: 0;
`;

const CardContent = styled.p`
  padding: 0;
  margin: 0;
`;
