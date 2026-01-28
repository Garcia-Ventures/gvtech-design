import { mergeConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default {
  stories: ['../src/Intro.stories.tsx', '../src/**/*.stories.@(js|jsx|ts|tsx|mdx)', '../src/**/*.mdx'],
  staticDirs: ['../public'],
  addons: ['@storybook/addon-links', '@storybook/addon-a11y', '@storybook/addon-docs', '@storybook/react-docgen-typescript-plugin'],
  framework: {
    name: '@storybook/react-vite',
    options: {
      typescript: {
        check: true,
      },
    },
  },
  docs: {
    autodocs: true,
  },
  features: {
    interactionsDebugger: true,
  },
  async viteFinal(config) {
    // Use the project's React plugin so Storybook's Vite matches the app behavior
    const projectPlugins = [react()];
    const projectResolve = {};

    return mergeConfig(config, {
      plugins: [...(config.plugins || []), ...projectPlugins],
      resolve: {
        ...(config.resolve || {}),
        ...(projectResolve || {}),
      },
    });
  },
};
