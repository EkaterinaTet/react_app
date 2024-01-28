import { render, screen } from "@testing-library/react";
import MainApp from "./App";
import { createRoot } from "react-dom/client";
import { act } from "react-dom/test-utils";

// test("renders learn react link", () => {
//   render(<MainApp />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

it("renders without crashing", () => {
  const div = document.createElement("div");
  const root = createRoot(div);
  act(() => {
    root.render(<MainApp />);
  });
  act(() => {
    root.unmount();
  });
});
