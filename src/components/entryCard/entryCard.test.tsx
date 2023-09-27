import { describe, test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import EntryCard from "./EntryCard";

describe("EntryCard", () => {
  test("The h1 element - show name trip - exists", () => {
    render(<EntryCard nameTripe="{trip.name}" imageURL="{trip.image}" />);
    const nameTrip = screen.getByRole("showNameTrip");
    expect(nameTrip).toBeInTheDocument();
  });
  test("The img element - image trip - exists", () => {
    render(<EntryCard nameTripe="{trip.name}" imageURL="{trip.image}" />);
    const image = screen.getByRole("imageTrip");
    expect(image).toBeInTheDocument();
  });
  test("The button element - show more - exists", () => {
    render(<EntryCard nameTripe="{trip.name}" imageURL="{trip.image}" />);
    const buttonShowMore = screen.getByText("show more");
    expect(buttonShowMore).toBeInTheDocument();
  });
  test("The button element - update - exists", () => {
    render(<EntryCard nameTripe="{trip.name}" imageURL="{trip.image}" />);
    const buttonUpdate = screen.getByText("update");
    expect(buttonUpdate).toBeInTheDocument();
  });
  test("The button element - delete - exists", () => {
    render(<EntryCard nameTripe="{trip.name}" imageURL="{trip.image}" />);
    const buttonDelete = screen.getByText("delete");
    expect(buttonDelete).toBeInTheDocument();
  });
});
