import * as React from "react";
import { fireEvent, render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import RawDropdown from "./RawDropdown";

test("Toggles content visibility when control is clicked", () => {
  const { getByTestId, queryByTestId } = render(
    <RawDropdown control={<div>Test Control</div>}>
      <div>Test Content</div>
    </RawDropdown>
  );

  const control = getByTestId("control-container");
  const contentContainer = "content-container";

  expect(queryByTestId(contentContainer)).not.toBeInTheDocument();
  fireEvent.mouseEnter(control);
  expect(queryByTestId(contentContainer)).toBeInTheDocument();
  fireEvent.mouseLeave(control);
  expect(queryByTestId(contentContainer)).not.toBeInTheDocument();
});
