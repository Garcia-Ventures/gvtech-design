import type { ReactNode } from 'react';
import { Meta, StoryObj } from '@storybook/react-vite';

import { Badge } from './Badge';
import { Icon } from './Icon';

const meta: Meta<typeof Badge> = {
  title: 'Design System/Badge',
  component: Badge,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const AllBadges: Story = {
  args: {
    children: 'Badge',
  },
  render: (_args) => (
    <div>
      <Badge status="positive">Positive</Badge>
      <Badge status="negative">Negative</Badge>
      <Badge status="neutral">Neutral</Badge>
      <Badge status="error">Error</Badge>
      <Badge status="warning">Warning</Badge>
      <Badge status="positive">
        <Icon icon="facehappy" inline block={false} />
        with icon
      </Badge>
    </div>
  ),
};

export const Positive: Story = {
  render: () => <Badge status="positive">Positive</Badge>,
};
export const Negative = () => <Badge status="negative">Negative</Badge>;
export const Warning = () => <Badge status="warning">Warning</Badge>;
export const Neutral = () => <Badge status="neutral">Neutral</Badge>;
export const Error = () => <Badge status="error">Error</Badge>;

interface BadgeArgs {
  status?: 'positive' | 'negative' | 'neutral' | 'error' | 'warning';
  children?: ReactNode;
}

interface IconArgs {
  icon: string;
  inline?: boolean;
  block: boolean;
}

type WithIconArgs = BadgeArgs & IconArgs;

export const WithIcon = (args: WithIconArgs) => (
  <Badge {...args}>
    <Icon {...args} />
    with icon
  </Badge>
);
WithIcon.args = {
  status: 'warning',
  icon: 'check',
  inline: true,
  block: false,
};

WithIcon.storyName = 'with icon';
