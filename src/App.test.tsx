import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, test } from "vitest";
import App from "./App";

describe("App", () => {
  test("App test", async () => {
    render(<App />);
    const user = userEvent.setup();
    const button = screen.getByRole("button", {
      name: "Increment +",
    });
    expect(button).toBeInTheDocument();
    const text = screen.getByRole("generic", { name: "count" });
    expect(text).toHaveTextContent("0");
    await user.click(button);
    expect(text).toHaveTextContent("1");
  });
});
