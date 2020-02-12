import * as React from "react";
import { fireEvent, render, wait } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import RawDropdown from "./RawDropdown";

test("Toggles dropdown visibility when link is hovered", async () => {
  const { baseElement, getByTestId } = render(<RawDropdown />);
  const link = getByTestId('dropdown-link');
  const dropdownClass = '.ant-dropdown';

  expect(baseElement.querySelector(dropdownClass)).not.toBeInTheDocument();

  fireEvent.mouseEnter(link);
  await wait(() => {
    expect(baseElement.querySelector(dropdownClass)).toBeInTheDocument();
  });

  fireEvent.mouseLeave(link);
  await wait(() => {
    expect(baseElement.querySelector(dropdownClass)).toHaveClass('ant-dropdown-hidden');
  });

  fireEvent.mouseEnter(link);
  await wait(() => {
    expect(baseElement.querySelector(dropdownClass)).not.toHaveClass('ant-dropdown-hidden');
  });
});
