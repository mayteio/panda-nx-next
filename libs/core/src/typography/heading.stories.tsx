import type { Meta, StoryObj } from '@storybook/react';

import { Heading } from './heading';

const meta: Meta = { component: Heading };
type Story = StoryObj<typeof Heading>;

export default meta;

export const Variants: Story = {
  args: { size: 'h1' },
  render: (args) => <Heading {...args}>Hello world</Heading>,
};
