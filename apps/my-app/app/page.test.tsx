import { render, screen } from '@testing-library/react';

import Page from './page';

describe('<Page />', () => {
  it('Should render', () => {
    render(<Page />);
    expect(screen.getByText(/hello/i)).toBeTruthy();
  });
});
