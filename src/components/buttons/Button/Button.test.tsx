import { render, screen } from '@testing-library/react';

import { Button, BUTTON_TEST_IDS, buttonClassNames } from './Button';

const buttonProps = {
  children: 'button test text',
  onClick: jest.fn(),
};

describe('Button startIcon', () => {
  test('should display startIcon when provided', () => {
    render(<Button {...buttonProps} startIcon={<div>1</div>} />);

    const startIcon = screen.getByTestId(BUTTON_TEST_IDS.START_ICON);

    expect(startIcon).toBeInTheDocument();
  });

  test('should not display startIcon if it is not provided', () => {
    render(<Button {...buttonProps} />);

    const startIcon = screen.queryByTestId(BUTTON_TEST_IDS.START_ICON);

    expect(startIcon).not.toBeInTheDocument();
  });
});

describe('Button endIcon', () => {
  test('should display endIcon when provided', () => {
    render(<Button {...buttonProps} endIcon={<div>1</div>} />);

    const endIcon = screen.getByTestId(BUTTON_TEST_IDS.END_ICON);

    expect(endIcon).toBeInTheDocument();
  });

  test('should not display endIcon if it is not provided', () => {
    render(<Button {...buttonProps} />);

    const endIcon = screen.queryByTestId(BUTTON_TEST_IDS.END_ICON);

    expect(endIcon).not.toBeInTheDocument();
  });
});

describe('Button size', () => {
  test('should show medium size when it provided', () => {
    const classNames = buttonClassNames({ size: 'medium' });
    render(<Button {...buttonProps} size='medium' />);

    const container = screen.getByTestId(BUTTON_TEST_IDS.CONTAINER);

    expect(container).toHaveClass(classNames);
  });

  test('should show small size when it provided', () => {
    const classNames = buttonClassNames({ size: 'small' });

    render(<Button {...buttonProps} size='small' />);

    const container = screen.getByTestId(BUTTON_TEST_IDS.CONTAINER);

    expect(container).toHaveClass(classNames);
  });

  test('should show small size by default even it is not provided', () => {
    const classNames = buttonClassNames({});
    render(<Button {...buttonProps} />);

    const container = screen.getByTestId(BUTTON_TEST_IDS.CONTAINER);

    expect(container).toHaveClass(classNames);
  });
});

describe('Button variant', () => {
  test('should correct show contained variant when provided', () => {
    const classNames = buttonClassNames({ variant: 'contained' });

    render(<Button {...buttonProps} variant='contained' />);

    const container = screen.getByTestId(BUTTON_TEST_IDS.CONTAINER);

    expect(container).toHaveClass(classNames);
  });

  test('should correct show outlined variant when provided', () => {
    const classNames = buttonClassNames({ variant: 'outlined' });

    render(<Button {...buttonProps} variant='outlined' />);

    const container = screen.getByTestId(BUTTON_TEST_IDS.CONTAINER);

    expect(container).toHaveClass(classNames);
  });

  test('should be outlined by default even if variant is not provided', () => {
    const classNames = buttonClassNames({});
    render(<Button {...buttonProps} />);

    const container = screen.getByTestId(BUTTON_TEST_IDS.CONTAINER);

    expect(container).toHaveClass(classNames);
  });
});

describe('Button', () => {
  test("should show correct outlined variant it's provided", () => {
    render(<Button {...buttonProps} />);

    const children = screen.getByTestId(BUTTON_TEST_IDS.CHILDREN);

    expect(children).toHaveTextContent(buttonProps.children);
  });

  test('should display loader when loading', () => {
    render(<Button {...buttonProps} loading />);

    const loader = screen.getByTestId(BUTTON_TEST_IDS.LOADER);

    expect(loader).toBeInTheDocument();
  });
});
