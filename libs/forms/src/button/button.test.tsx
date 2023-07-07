import { render, screen } from '@testing-library/react';
import { composeStory } from '@storybook/react';

import { default as meta, Primary } from './button.stories';

describe('<Page />', () => {
  it('Should render', () => {
    const Story = composeStory(Primary, meta);
    render(<Story />);
    expect(screen.getByText(/click me/i)).toBeTruthy();
  });
});
