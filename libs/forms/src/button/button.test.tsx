import { render, screen } from '@testing-library/react';
import { composeStory } from '@storybook/react';

import { default as meta, Primary } from './button.stories';

describe('<Page />', () => {
  it('Should render', () => {
    render(composeStory(Primary, meta));
    expect(screen.getByText(/click me/i)).toBeTruthy();
  });
});
