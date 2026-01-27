export default {
  stories: ['../src/Intro.stories.tsx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  staticDirs: ['../public'],
  addons: ['@storybook/addon-links', '@storybook/addon-a11y', '@storybook/addon-actions', '@storybook/addon-docs', '@storybook/react-docgen-typescript-plugin'],
  framework: {
    name: '@storybook/react-vite',
    options: {
      typescript: {
        check: false,
      },
    },
  },
  features: {
    interactionsDebugger: true,
  },
};
