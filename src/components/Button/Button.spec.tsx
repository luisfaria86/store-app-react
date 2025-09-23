import { render, screen, fireEvent } from '@testing-library/react';
import Button from '.';
import '@testing-library/jest-dom';
import { vi } from 'vitest';

describe('Button', () => {
  it('renders the button with the correct text', () => {
    const buttonText = 'Click Me';
    const handleClick = vi.fn();
    render(<Button text={buttonText} onClick={handleClick} />);
    const buttonElement = screen.getByText(buttonText);
    expect(buttonElement).toBeInTheDocument();
  });

  it('calls the onClick handler when clicked', () => {
    const buttonText = 'Click Me';
    const handleClick = vi.fn();
    render(<Button text={buttonText} onClick={handleClick} />);
    const buttonElement = screen.getByText(buttonText);
    fireEvent.click(buttonElement);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('applies the correct CSS classes', () => {
    const buttonText = 'Test Button';
    const handleClick = vi.fn();
    render(<Button text={buttonText} onClick={handleClick} />);
    const buttonElement = screen.getByText(buttonText);
    expect(buttonElement).toHaveClass('text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800');
  });
});
