import React from 'react';

import { GlobalStyle } from '../src/shared/global';

interface StoryFn {
  (): React.ReactElement | null;
}

interface Decorator {
  (Story: StoryFn): React.ReactElement | null;
}

export const decorators: Decorator[] = [
  (Story: StoryFn) => (
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
