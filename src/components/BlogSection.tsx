import { useStaticQuery, graphql, Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import { VariableH2 } from './Components';
import { Section } from './Section';
import Img from 'gatsby-image';

function BlogCards() {
  const { allMarkdownRemark } = useStaticQuery(graphql`
    query AllPosts {
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
      <Link
        key={node.frontmatter.slug}
        to={node.frontmatter.slug}
        style={{
          textDecoration: 'none',
          color: 'inherit',
        }}
      >
        <CardContainer key={node.frontmatter.slug}>
          {image ? (
            <CardGatsbyImg fluid={image} />
          ) : (
            <CardImg src={'https://dummyimage.com/500x500.png'} />
          )}
          <CardHeading>{node.frontmatter.title}</CardHeading>
          <CardContent>This is the content of the blog card...</CardContent>
        </CardContainer>
      </Link>
    );
  });
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

const CardGatsbyImg = styled(Img)`
  width: 100%;
  max-width: 500px;
  height: auto;
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
