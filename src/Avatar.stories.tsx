import { Meta, StoryObj } from '@storybook/react-vite';
import { Avatar } from './Avatar';

const meta: Meta<typeof Avatar> = {
  title: 'Design System/Avatar',
  component: Avatar,
  argTypes: {
    loading: {
      control: 'boolean',
      description: 'Use the loading state to indicate that the data Avatar needs is still loading.',
    },
    username: {
      description:
        "Avatar falls back to the user's initial when no image is provided. Supply a `username` and omit `src` to see what this looks like.",
    },
    src: {
      description: "The URL of the Avatar's image.",
    },
    size: {
      description: "Avatar comes in four sizes. In most cases, you'll be fine with `medium`.",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

import { expect } from '@storybook/jest';
import { within } from '@storybook/testing-library';

export const Standard: Story = {
  args: {
    username: 'John Doe',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const avatar = canvas.getByTitle('John Doe');
    expect(avatar).toBeInTheDocument();
    expect(avatar).toHaveTextContent('J');
  },
};

export const Loading: Story = {
  args: {
    loading: true,
    username: 'Loading',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const avatar = canvas.getByTitle('Loading');
    expect(avatar).toBeInTheDocument();
    // In loading state, it might show a placeholder or nothing specific
  },
};

export const WithImage: Story = {
  args: {
    src: 'https://avatars.githubusercontent.com/u/1?v=4',
    username: 'GitHub',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const img = canvas.getByRole('img');
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute('src', 'https://avatars.githubusercontent.com/u/1?v=4');
  },
};
