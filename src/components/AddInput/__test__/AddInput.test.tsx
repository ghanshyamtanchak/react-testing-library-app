import { render, screen, fireEvent } from '@testing-library/react';
import AddInput from '../AddInput';

const mockSetTodos = jest.fn();

type TestElement = Document | Element | Window | Node;

const hasInputValue = (e: TestElement, inputValue: string) =>
  screen.getByDisplayValue(inputValue) === e;

describe('AddInput', () => {
  it('should render input element', async () => {
    render(<AddInput todos={[]} setTodos={mockSetTodos} />);
    const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
    expect(inputElement).toBeInTheDocument();
  });

  it('should be able to type into input', async () => {
    render(<AddInput todos={[]} setTodos={mockSetTodos} />);
    const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
    fireEvent.change(inputElement, { target: { value: 'Grocery Shopping' } });
    expect(hasInputValue(inputElement, 'Grocery Shopping')).toBe(true);
  });

  it('should have empty input when add button is clicked', async () => {
    render(<AddInput todos={[]} setTodos={mockSetTodos} />);
    const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
    const buttonElement = screen.getByRole('button', { name: /Add/ });
    fireEvent.change(inputElement, { target: { value: 'Grocery Shopping' } });
    fireEvent.click(buttonElement);
    expect(hasInputValue(inputElement, '')).toBe(true);
  });
});
