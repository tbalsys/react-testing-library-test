import * as React from "react";
import { fireEvent, render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import RawDropdown from "./RawDropdown";

test("Toggles content visibility when control is clicked", () => {
  const { getByTestId } = render(
    <RawDropdown control={<div>Test Control</div>}>
      <div>Test Content</div>
    </RawDropdown>
  );
  const control = getByTestId("control-container");
  const content = getByTestId("content-container");
  expect(content).not.toBeVisible();
  fireEvent.click(control);
  expect(content).toBeVisible();
  fireEvent.click(control);
  expect(content).not.toBeVisible();
});
