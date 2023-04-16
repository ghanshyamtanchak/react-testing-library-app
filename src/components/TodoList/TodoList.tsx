import { FC } from 'react';

import Footer from '../Footer/Footer';
import './TodoList.css';

import { ITodo } from '../../interfaces';

interface Props {
  todos: ITodo[];
  setTodos: React.Dispatch<React.SetStateAction<ITodo[]>>;
}

const TodoList: FC<Props> = ({ todos, setTodos }) => {
  const updateTask = (id: string) => {
    let updatedTasks = todos.map((todo: ITodo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
        return todo;
      } else {
        return todo;
      }
    });
    setTodos(updatedTasks);
  };

  const calcNumberOfIncompletedTasks = () => {
    let count = 0;
    todos.forEach((todo: ITodo) => {
      if (!todo.completed) count++;
    });
    return count;
  };

  return (
    <div className="todolist-container">
      <div className="todos-container">
        <div>
          {todos.map((todo: ITodo) => (
            <div
              key={todo.id}
              className={`todo-item ${todo.completed && 'todo-item-active'}`}
              onClick={() => updateTask(todo.id)}
              data-testid="task-container"
            >
              {todo.task}
            </div>
          ))}
        </div>
      </div>
      <div>
        <Footer numberOfIncompleteTasks={calcNumberOfIncompletedTasks()} />
      </div>
    </div>
  );
};

export default TodoList;
