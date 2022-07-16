import React from 'react';
import styled from 'styled-components';

import { Link } from 'gatsby';
import { GatsbyImage, StaticImage } from 'gatsby-plugin-image';

interface BlogCardProps {
  slug: string;
  title: string;
  excerpt: string;
  image?: any;
  publicURL?: string | null;
}

export function BlogCard(props: BlogCardProps) {
  const { slug, title, excerpt, image, publicURL } = props;
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
          <CardGatsbyImg image={image} alt="slug" />
        ) : publicURL ? (
          <CardImg src={publicURL} alt="slug" />
        ) : (
          <CardImg
            src={'https://dummyimage.com/500x500.png'}
            alt="slug"
            width={500}
            height={500}
          />
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

const CardGatsbyImg = styled(GatsbyImage)`
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
