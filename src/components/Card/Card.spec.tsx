import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Card, { CardProps } from "../Card";
import "@testing-library/jest-dom";

describe("Card", () => {
  const defaultProps: CardProps = {
    id: "123",
    title: "Fresh Apples",
    price: "2.99",
    image: "apple.jpg",
    origin: "Portugal",
  };

  it("renders the title, price, and origin", () => {
    render(
      <MemoryRouter>
        <Card {...defaultProps} />
      </MemoryRouter>
    );

    expect(screen.getByText("Fresh Apples")).toBeInTheDocument();
    expect(screen.getByText("2.99 €/kg")).toBeInTheDocument();
    expect(screen.getByText("Portugal")).toBeInTheDocument();
  });

  it("renders the product image with alt text", () => {
    render(
      <MemoryRouter>
        <Card {...defaultProps} />
      </MemoryRouter>
    );

    const img = screen.getByAltText("product-img");
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute("src", "apple.jpg");
  });

  it("links to the correct product page", () => {
    render(
      <MemoryRouter>
        <Card {...defaultProps} />
      </MemoryRouter>
    );

    const link = screen.getByRole("link");
    expect(link).toHaveAttribute("href", "/product/123");
  });
});