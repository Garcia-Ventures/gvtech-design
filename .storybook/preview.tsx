import React from 'react';
import type { StoryFn, Preview, StoryContext } from '@storybook/react';
import { GlobalStyle } from '../src/shared/global';

export const decorators: Preview['decorators'] = [
  (Story: StoryFn, context: StoryContext) => (
    <>
      <GlobalStyle />
      {Story(context.args, context)}
    </>
  ),
];

export const parameters: Preview['parameters'] = {
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
export const tags: string[] = ['autodocs'];
