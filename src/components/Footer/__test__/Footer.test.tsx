import { render, screen } from '@testing-library/react';
import { FC } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Footer from '../Footer';

interface Props {
  numberOfIncompleteTasks: number;
}

const MockFooter: FC<Props> = ({ numberOfIncompleteTasks }) => (
  <Router>
    <Footer numberOfIncompleteTasks={numberOfIncompleteTasks} />
  </Router>
);

describe('Footer', () => {
  it('should render the correct amount of incomplete tasks', async () => {
    render(<MockFooter numberOfIncompleteTasks={2} />);
    const paragraphElement = screen.getByText(/2 tasks left/i);
    expect(paragraphElement).toBeInTheDocument();
  });

  it('should render "task" when the amount of incomplete task is one', async () => {
    render(<MockFooter numberOfIncompleteTasks={1} />);
    const paragraphElement = screen.getByText(/1 task left/i);
    expect(paragraphElement).toBeInTheDocument();
  });
});
