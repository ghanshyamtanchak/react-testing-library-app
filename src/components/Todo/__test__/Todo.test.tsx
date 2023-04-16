import { fireEvent, render, screen } from '@testing-library/react';
import { FC } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Todo from '../Todo';

const MockTodo: FC = () => (
  <Router>
    <Todo />
  </Router>
);

const addTask = (tasks: string[]) => {
  const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
  const buttonElement = screen.getByRole('button', { name: /Add/i });
  tasks.forEach((task) => {
    fireEvent.change(inputElement, { target: { value: task } });
    fireEvent.click(buttonElement);
  });
};

describe('Todo', () => {
  it('should be able to type into input', async () => {
    render(<MockTodo />);
    addTask(['Grocery Shopping']);
    const divElement = screen.getByText(/Grocery Shopping/i);
    expect(divElement).toBeInTheDocument();
  });

  it('should render multiple items', async () => {
    render(<MockTodo />);
    addTask([
      'Go Grocery Shopping',
      'Go Clothes Shopping',
      'Go Jewellery Shopping',
    ]);
    const divElements = screen.getAllByTestId(/task-container/i);
    expect(divElements.length).toBe(3);
  });

  it('should not have completed class when task is initially created', async () => {
    render(<MockTodo />);
    addTask(['Go Grocery Shopping']);
    const divElements = screen.getByTestId(/task-container/i);
    expect(divElements).not.toHaveClass('todo-item-active');
  });

  it('should have completed class when task is clicked', async () => {
    render(<MockTodo />);
    addTask(['Go Grocery Shopping']);
    const divElements = screen.getByTestId(/task-container/i);
    fireEvent.click(divElements);
    expect(divElements).toHaveClass('todo-item-active');
  });
});
