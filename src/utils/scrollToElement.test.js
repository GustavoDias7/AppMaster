import React from "react";
import { render, cleanup, screen, fireEvent } from "@testing-library/react";
import scrollToElement from "utils/scrollToElement";
import Button from "components/common/Buttons/Button";

afterEach(cleanup);

window.scrollTo = jest.fn();

afterAll(() => {
  jest.clearAllMocks();
});

it("should scroll to the selected element", () => {
  render(
    <div id="root">
      <header>header</header>
      <Button onClick={(e) => scrollToElement(e, "#test-element")}>
        Scroll to Element
      </Button>
      <h1 id="test-element">Test element</h1>
    </div>
  );
  const buttonToScroll = screen.getByText("Scroll to Element");
  fireEvent.click(buttonToScroll);
});
