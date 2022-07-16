import React from 'react';

import { Helmet } from 'react-helmet';

interface PageHelmetProps {
  title?: string;
  subtitle?: string;
}

export const PageHelmet = (props: PageHelmetProps) => (
  <Helmet>
    {props.title ? (
      <title>{props.title}</title>
    ) : (
      <title>
        🧨 billyjacoby.com{props.subtitle ? ` - ${props.subtitle}` : ''}
      </title>
    )}
    <meta charSet="utf-8" />
  </Helmet>
);
