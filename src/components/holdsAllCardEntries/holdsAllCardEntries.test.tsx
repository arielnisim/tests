import { describe, test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import HoldsAllCardEntries from "./HoldsAllCardEntries";

describe("EntryCard", () => {
  test("The div element - holds all card entries - exists", () => {
    render(<HoldsAllCardEntries />);
    const holdscards = screen.getByRole("holdscards");
    expect(holdscards).toBeInTheDocument();
  });
});
