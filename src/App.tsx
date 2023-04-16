import { FC } from 'react';
import { Route, Routes } from 'react-router';

import './App.css';

import Banner from './components/Banner/Banner';
import FollowersPage from './pages/FollowersPage/FollowersPage';
import TodoPage from './pages/ToDoPage/ToDoPage';

const App: FC = () => {
  return (
    <div className="App">
      <Banner />
      <Routes>
        <Route path="/" element={<TodoPage />} />
        <Route path="/followers" element={<FollowersPage />} />
      </Routes>
    </div>
  );
};

export default App;
