import React from 'react';
import styled from 'styled-components';

import { VariableH1, VariableH4 } from './Components';
import { Section } from './Section';

import { AboutPage } from '../svgs/AboutPage';
import spaceAnimation from '../images/lottie/space-background.json';

export function AboutHeader() {
  return (
    <Section bottomAnimation={{ animation: spaceAnimation }}>
      <div>
        <span>about billyjacoby</span>
        <VariableH1>
          full stack web developer, & learner of new things
        </VariableH1>
        <VariableH4 weight={200}>
          From web development, to microcontrollers and everything in between I
          love to learn how things work and solve different kinds of problems.
        </VariableH4>
      </div>
      <AboutPage />
    </Section>
  );
}
