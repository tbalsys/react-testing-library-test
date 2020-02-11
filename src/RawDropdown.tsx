import * as React from "react";
import "./styles.css";

interface IRawDropdownProps {
  control: JSX.Element;
  children: JSX.Element;
}

export default function RawDropdown({ control, children }: IRawDropdownProps) {
  const [show, setShow] = React.useState(false);

  return (
    <div className="App">
      <div data-testid="control-container" onMouseEnter={() => setShow(true)} onMouseLeave={() => setShow(false)}>
        {control}
      </div>
      <div
        data-testid="content-container"
        style={{ display: show ? "block" : "none" }}
      >
        {children}
      </div>
    </div>
  );
}
