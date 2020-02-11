import * as React from "react";
import { render } from "react-dom";

import RawDropdown from "./RawDropdown";
import 'antd/dist/antd.css';

const rootElement = document.getElementById("root");
render(
  <RawDropdown control={<h1 data-testid="control-container">Title</h1>}>
    <p data-testid="content-container">Hello</p>
  </RawDropdown>,
  rootElement
);
