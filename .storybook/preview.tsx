import React from 'react';

import { GlobalStyle } from '../src/shared/global';

export const decorators = [
  (Story: any) => (
    <>
      <GlobalStyle />
      <Story />
    </>
  ),
];

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  docs: {
    codePanel: true,
  },
  a11y: {
    config: {},
    options: {},
  },
};
export const tags = ['autodocs'];
