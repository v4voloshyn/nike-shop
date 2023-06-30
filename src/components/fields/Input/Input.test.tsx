import { render, screen } from '@testing-library/react';

import { Input, INPUT_TEST_IDS } from './Input';

describe('Input', () => {
  test('should display startIcon when provided', () => {
    render(<Input startIcon={<div>1</div>} />);

    const startIcon = screen.getByTestId(INPUT_TEST_IDS.START_ICON);

    expect(startIcon).toBeInTheDocument();
  });

  test('should not display startIcon if it is not provided', () => {
    render(<Input />);

    const startIcon = screen.queryByTestId(INPUT_TEST_IDS.START_ICON);

    expect(startIcon).not.toBeInTheDocument();
  });
});
