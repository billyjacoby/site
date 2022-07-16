import React from 'react';
import { graphql, PageProps } from 'gatsby';
import { Navbar } from '../components/Navigation/Navbar';
import { Footer } from '../components/Footer';
import { Container } from '../components/Components';

import { defineCustomElements as deckDeckGoHighlightElement } from '@deckdeckgo/highlight-code/dist/loader';

deckDeckGoHighlightElement();

export default function Template({ data }: PageProps<Queries.BlogPostQuery>) {
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark!;

  if (!frontmatter || !html) {
    return null;
  }
  return (
    <>
      <Navbar />
      <Container>
        <div className="blog-post-container">
          <h1>{frontmatter.title}</h1>
          <h2>{frontmatter.date}</h2>
          <div dangerouslySetInnerHTML={{ __html: html }} />
        </div>
      </Container>
      <Footer />
    </>
  );
}
export const pageQuery = graphql`
  query BlogPost($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
      }
    }
  }
`;
