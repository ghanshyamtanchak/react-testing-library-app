import { FC, useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import './FollowersList.css';

import { IFollower } from '../../interfaces';

const FollowersList: FC = () => {
  const [followers, setFollowers] = useState<IFollower[]>([]);

  useEffect(() => {
    fetchFollowers();
  }, []);

  const fetchFollowers = async () => {
    const { data } = await axios.get('https://randomuser.me/api/?results=5');
    setFollowers(data.results);
  };

  return (
    <div className="followerslist-container">
      <div>
        {followers.map((follower: IFollower, index: number) => (
          <div
            className="follower-item"
            key={follower.login.username}
            data-testid={`follower-item-${index}`}
          >
            <img alt={follower.login.username} src={follower.picture.large} />
            <div className="followers-details">
              <div className="follower-item-name">
                <h4>{follower.name.first}</h4> <h4>{follower.name.last}</h4>
              </div>
              <p>{follower.login.username}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="todo-footer">
        <Link to="/">Go Back</Link>
      </div>
    </div>
  );
};

export default FollowersList;
