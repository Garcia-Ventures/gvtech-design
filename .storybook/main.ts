import { mergeConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default {
  stories: ['../src/Intro.stories.tsx', '../src/**/*.stories.@(js|jsx|ts|tsx|mdx)'],
  staticDirs: ['../public'],
  addons: ['@storybook/addon-links', '@storybook/addon-a11y', '@storybook/addon-docs'],

  framework: {
    name: '@storybook/react-vite',
    options: {
      typescript: {
        check: true,
        // Use react-docgen-typescript for TypeScript prop documentation in Vite-based Storybook
        // This leverages Storybook's built-in integration instead of the webpack-only plugin
        reactDocgen: 'react-docgen-typescript',
        reactDocgenTypescriptOptions: {
          shouldExtractLiteralValuesFromEnum: true,
          shouldRemoveUndefinedFromOptional: true,
          propFilter: (prop) => (prop.parent ? !/node_modules/.test(prop.parent.fileName) : true),
        },
      },
    },
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
