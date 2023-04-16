import { FC, useState } from 'react';

import AddInput from '../AddInput/AddInput';
import Header from '../Header/Header';
import TodoList from '../TodoList/TodoList';
import './Todo.css';

import { ITodo } from '../../interfaces';

const Todo: FC = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);

  return (
    <div className="todo">
      <Header title="Todo" />
      <AddInput setTodos={setTodos} todos={todos} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
};

export default Todo;
