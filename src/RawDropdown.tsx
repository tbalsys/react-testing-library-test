import * as React from "react";
import {Dropdown} from 'antd';
import "./styles.css";

interface IRawDropdownProps {
  control: JSX.Element;
  children: JSX.Element;
}

export default function RawDropdown({control, children}: IRawDropdownProps) {
  const [visible, setVisible] = React.useState(false);

  return (
      <Dropdown
        visible={visible}
        onVisibleChange={setVisible}
        overlay={children}
        data-testid="control-container1"
      >
        {control}
      </Dropdown>
  );
}
