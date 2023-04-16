import { FC, useState } from 'react';
import { v4 } from 'uuid';

import './AddInput.css';

import { ITodo } from '../../interfaces';

interface Props {
  setTodos: React.Dispatch<React.SetStateAction<ITodo[]>>;
  todos: ITodo[];
}

const AddInput: FC<Props> = ({ setTodos, todos }) => {
  const [todo, setTodo] = useState<string>('');

  const addTodo = () => {
    let updatedTodos = [
      ...todos,
      {
        id: v4(),
        task: todo,
        completed: false,
      },
    ];
    setTodos(updatedTodos);
    setTodo('');
  };

  return (
    <div className="input-container">
      <input
        className="input"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        placeholder="Add a new task here..."
      />
      <button className="add-btn" onClick={addTodo}>
        Add
      </button>
    </div>
  );
};

export default AddInput;
