import React from 'react';
import styled from 'styled-components';

import { VariableH1, VariableH4 } from './Components';
import { Section } from './Section';

import { ThinkingAtDesk } from '../svgs/Desk';
import spaceAnimation from '../images/lottie/space-background.json';

export function Header() {
  return (
    <Section bottomAnimation={{ animation: spaceAnimation }}>
      <div>
        <VariableH1>
          a collection of blog posts, tech demos, and tutorials
        </VariableH1>
        <VariableH4 weight={200}>
          hi, I’m billy jacoby – a freelance web developer, tech enthusiast, and
          an avid learner of things
        </VariableH4>
      </div>
      <ThinkingAtDesk color1="var(--accent-2)" />
    </Section>
  );
}
