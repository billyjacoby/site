import { graphql, PageProps } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import Masonry from 'react-masonry-css';

import { BlogCard } from '../components/Blog/BlogCard';
import { Footer } from '../components/Footer';
import { Navbar } from '../components/Navigation/Navbar';
import { Section } from '../components/Section';

const breakpointColumnsObj = {
  default: 4,
  1100: 3,
  700: 2,
  500: 1,
};

function BlogPage({ data }: PageProps<Queries.AllPostsQuery>) {
  const { allMarkdownRemark } = data;
  const posts = allMarkdownRemark.edges.map(({ node }) => ({
    ...node,
  }));

  return (
    <>
      <Navbar />
      <Section style={{ height: '20rem' }}>
        <h1>Blog</h1>
      </Section>
      <Section
        background="var(--secondary-background)"
        maxWidth="100vw"
        noContainer
        style={{ padding: '2rem' }}
      >
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          {posts.map((post) => (
            <BlogCard
              key={post.id}
              slug={post.frontmatter!.slug!}
              title={post.frontmatter!.title!}
              excerpt={post!.excerpt!}
              image={post!.frontmatter!.featuredImage?.childImageSharp?.fluid}
            />
          ))}
        </Masonry>
      </Section>
      <Footer />
    </>
  );
}

export default BlogPage;

export const query = graphql`
  query AllPosts {
    allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
      edges {
        node {
          id
          html
          excerpt(format: PLAIN, pruneLength: 100)
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
`;
