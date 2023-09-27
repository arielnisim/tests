import { describe, test, expect } from "vitest";
import { axiosGet } from "./axios";

describe("tests on function axiosGet", () => {
  test("sent correctly", async () => {
    const act = await axiosGet("http://localhost:3000/api/trips");
    expect(Array.isArray(act)).toBeTruthy();
  });
  test("No argument entered", async () => {
    await expect(axiosGet()).rejects.toThrowError();
  });
  test("A non-string argument is passed", async () => {
    await expect(axiosGet(123)).rejects.toThrowError();
  });
  test("The path was not found", async () => {
    await expect(axiosGet("aaaa")).rejects.toThrowError();
  });
});
