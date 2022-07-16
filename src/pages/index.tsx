import React from 'react';
import styled from 'styled-components';

//Components
import { Navbar } from '../components/Navigation/Navbar';
import { Header } from '../components/Header';
import { Section } from '../components/Section';
import { VariableH2 } from '../components/Components';
import { Collaboration } from '../svgs/Collaboration';
import { Footer } from '../components/Footer';
import { BlogSection } from '../components/Blog/BlogSection';
import { Helmet } from 'react-helmet';
import { PageHelmet } from '../components/PageHelmet';

const IndexPage = () => {
  return (
    <main>
      <PageHelmet />
      <title>Home Page</title>
      <Navbar />
      <Header />
      <Section background="var(--secondary-background)">
        <Collaboration color1="var(--accent)" />
        <div>
          <VariableH2 weight="400">a little more about me</VariableH2>
          <ul>
            <li>
              Specialize in blockchain technologies with a focus on frontend
            </li>
            <li>GatsbyJS contributor</li>
            <li>Proficient in NextJS with a variety of database backends</li>
            <li>
              Experienced with Redux and other frequently used React libraries
            </li>
          </ul>
        </div>
      </Section>
      <BlogSection />
      <Footer />
    </main>
  );
};

export default IndexPage;

const BaseSection = styled.div`
  border: solid 1px black;
`;
