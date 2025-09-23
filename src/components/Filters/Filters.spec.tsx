import { render, screen, fireEvent } from "@testing-library/react";
import Filters from "../Filters";
import { vi } from "vitest";
import "@testing-library/jest-dom";

describe("Filters", () => {
  const filterOptions = [
    { id: "fruits", label: "Fruits" },
    { id: "vegetables", label: "Vegetables" },
    { id: "meat", label: "Meat" },
  ];

  it("renders all filter buttons", () => {
    const mockFn = vi.fn();
    render(<Filters filterOptions={filterOptions} onFilterChange={mockFn} />);

    filterOptions.forEach(option => {
      expect(screen.getByText(option.label)).toBeInTheDocument();
    });
  });

  it("calls onFilterChange with the correct id when a button is clicked", () => {
    const mockFn = vi.fn();
    render(<Filters filterOptions={filterOptions} onFilterChange={mockFn} />);

    const fruitsButton = screen.getByText("Fruits");
    fireEvent.click(fruitsButton);

    expect(mockFn).toHaveBeenCalledTimes(1);
    expect(mockFn).toHaveBeenCalledWith("fruits");
  });
});