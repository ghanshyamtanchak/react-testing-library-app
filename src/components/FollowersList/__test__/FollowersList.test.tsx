import { render, screen, cleanup } from '@testing-library/react';
import { FC } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import FollowersList from '../FollowersList';

const MockFollowersList: FC = () => (
  <Router>
    <FollowersList />
  </Router>
);

describe('FollowersList', () => {
  afterEach(cleanup);

  it('should render follower items', async () => {
    render(<MockFollowersList />);
    const followerDivElement = await screen.findByTestId('follower-item-0');
    expect(followerDivElement).toBeInTheDocument();
  });
});
