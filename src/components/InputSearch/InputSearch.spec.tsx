import { act } from 'react';
import { render, screen, fireEvent } from "@testing-library/react";
import InputSearch from "../InputSearch";
import { vi } from "vitest";
import "@testing-library/jest-dom";

describe("InputSearch", () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.clearAllTimers();
    vi.useRealTimers();
  });

  it("renders input with placeholder", () => {
    const mockFn = vi.fn();
    render(
      <InputSearch placeholder="Search here..." onDebouncedChange={mockFn} />
    );

    const input = screen.getByPlaceholderText("Search here...");
    expect(input).toBeInTheDocument();
  });

  it("updates value when user types", () => {
    const mockFn = vi.fn();
    render(
      <InputSearch placeholder="Search..." onDebouncedChange={mockFn} />
    );

    const input = screen.getByPlaceholderText("Search...");
    fireEvent.change(input, { target: { value: "apple" } });

    expect(input).toHaveValue("apple");
  });

  it("calls onDebouncedChange with the debounced value", () => {
    const mockFn = vi.fn();
    render(<InputSearch placeholder="Search..." onDebouncedChange={mockFn} />);

    const input = screen.getByPlaceholderText("Search...");
    fireEvent.change(input, { target: { value: "apple" } });

    act(() => {
      vi.advanceTimersByTime(500);
    });

    expect(mockFn).toHaveBeenCalledWith("apple");
  });
});
