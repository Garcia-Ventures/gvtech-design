export default {
  stories: ['../src/Intro.stories.tsx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  staticDirs: ['../public'],
  addons: ['@storybook/addon-links', '@storybook/addon-a11y', '@storybook/addon-actions', '@storybook/addon-docs'],
  framework: {
    name: '@storybook/react-vite',
    options: {
      typescript: {
        check: false,
        reactDocgen: 'react-docgen-typescript',
      },
    },
  },
  features: {
    interactionsDebugger: true,
  },
};
