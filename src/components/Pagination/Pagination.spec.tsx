import { render, screen, fireEvent } from "@testing-library/react";
import Pagination from "../Pagination";
import { vi } from "vitest";
import "@testing-library/jest-dom";

describe("Pagination", () => {
  const pagesText = "Page 2 of 5";

  it("renders the current page text", () => {
    const mockPrev = vi.fn();
    const mockNext = vi.fn();
    render(
      <Pagination
        pages={pagesText}
        handlePreviousPage={mockPrev}
        handleNextPage={mockNext}
      />
    );

    expect(screen.getByText(pagesText)).toBeInTheDocument();
  });

  it("calls handlePreviousPage when Previous button is clicked", () => {
    const mockPrev = vi.fn();
    const mockNext = vi.fn();
    render(
      <Pagination
        pages={pagesText}
        handlePreviousPage={mockPrev}
        handleNextPage={mockNext}
      />
    );

    const prevButton = screen.getByText("Previous");
    fireEvent.click(prevButton);

    expect(mockPrev).toHaveBeenCalledTimes(1);
  });

  it("calls handleNextPage when Next button is clicked", () => {
    const mockPrev = vi.fn();
    const mockNext = vi.fn();
    render(
      <Pagination
        pages={pagesText}
        handlePreviousPage={mockPrev}
        handleNextPage={mockNext}
      />
    );

    const nextButton = screen.getByText("Next");
    fireEvent.click(nextButton);

    expect(mockNext).toHaveBeenCalledTimes(1);
  });
});
