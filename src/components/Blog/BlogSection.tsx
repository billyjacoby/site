import { useStaticQuery, graphql } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import { VariableH2 } from '../Components';
import { Section } from '../Section';
import { BlogCard } from './BlogCard';

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
                childImageSharp {
                  fluid(fit: CONTAIN) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      }
    }
  `);

  return allMarkdownRemark.edges.map(({ node }: { node: any }) => {
    const image = node.frontmatter?.featuredImage?.childImageSharp?.fluid;

    return (
      <BlogCard
        slug={node.frontmatter.slug}
        title={node.frontmatter.title}
        excerpt={node.excerpt}
        image={image}
      />
    );
  });
}

export function BlogSection() {
  return (
    <Section>
      <div>
        <VariableH2>Recent Blog Posts</VariableH2>
        <BlogCardContainer>
          <BlogCards />
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
