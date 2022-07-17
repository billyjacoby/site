import { useStaticQuery, graphql, Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import { VariableH2 } from '../Components';
import { Section } from '../Section';
import { BlogCard } from './BlogCard';

import chunkyBackground from '../../images/lottie/chunky-background.json';

function BlogCards() {
  const { allMarkdownRemark } = useStaticQuery(graphql`
    query LastThreePosts {
      allMarkdownRemark(
        sort: { fields: frontmatter___date, order: DESC }
        limit: 3
      ) {
        edges {
          node {
            id
            frontmatter {
              slug
              title
              date
              featuredImage {
                publicURL
                childImageSharp {
                  gatsbyImageData(
                    width: 500
                    placeholder: BLURRED
                    formats: [AUTO, WEBP, AVIF]
                  )
                }
              }
            }
          }
        }
      }
    }
  `);

  return allMarkdownRemark.edges.map(({ node }: { node: any }) => {
    const image =
      node.frontmatter?.featuredImage?.childImageSharp?.gatsbyImageData;
    const publicURL = node.frontmatter?.featuredImage?.publicURL;

    return (
      <BlogCard
        key={node.id}
        slug={node.frontmatter.slug}
        title={node.frontmatter.title}
        excerpt={node.excerpt}
        image={image}
        publicURL={publicURL}
      />
    );
  });
}

export function BlogSection() {
  return (
    <Section
      bottomAnimation={{
        animation: chunkyBackground,
        color: '--secondary-background',
        adjustPosition: false,
        bottom: '50%',
      }}
    >
      <div>
        <VariableH2>Recent Blog Posts</VariableH2>
        <ViewMoreLink to="/blog">View All</ViewMoreLink>
        <BlogCardContainer>
          <BlogCards />
        </BlogCardContainer>
      </div>
    </Section>
  );
}

const ViewMoreLink = styled(Link)`
  text-decoration: none;
  color: var(--accent);
  :hover {
    color: var(--accent-2);
  }
`;

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
