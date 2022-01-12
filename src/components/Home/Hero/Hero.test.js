import React from "react";
import { render, cleanup, screen } from "@testing-library/react";
import Hero from "./index";

afterEach(cleanup);

// render: virtually render the <Component />
// screen: access the rendered HTML

it("should render the text title", () => {
  render(<Hero />);
  const heroTitle = screen.getByText("Transforme sua ideia em um app!");
  expect(heroTitle);
});
