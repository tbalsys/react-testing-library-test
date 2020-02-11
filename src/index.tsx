import * as React from "react";
import { render } from "react-dom";

import RawDropdown from "./RawDropdown";

const rootElement = document.getElementById("root");
render(
  <RawDropdown control={<h1>Title</h1>}>
    <p>Hello</p>
  </RawDropdown>,
  rootElement
);
