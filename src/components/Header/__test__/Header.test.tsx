import { render, screen } from '@testing-library/react';
import Header from '../Header';

describe('Header', () => {
  it('should render same text as passed into the props', async () => {
    render(<Header title="hello" />);
    const headingElement = screen.getByText(/hello/i);
    expect(headingElement).toBeInTheDocument();
  });
});
