import type { Meta, StoryObj } from '@storybook/react';

import { TextField } from '.';

const meta: Meta = { component: TextField };
type Story = StoryObj<typeof TextField>;

export default meta;

export const Example: Story = {
  args: {
    label: 'Text field',
    placeholder: 'Click to type...',
    value: 'Click to type...',
  },
};
