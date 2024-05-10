import { render } from '@testing-library/react';
import { screen } from '@testing-library/dom';

function Button() {
  return <button>Click me</button>;
}

describe('Button', () => {
  it('renders without crashing', () => {
    render(<Button />);

    expect(screen.getByText('Click me')).toBeInTheDocument();
  });
});
