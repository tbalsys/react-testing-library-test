import * as React from "react";
import {Dropdown, Menu} from 'antd';
import "./styles.css";

const menu = (
  <Menu data-testid="content-container">
    <Menu.Item>foo</Menu.Item>
  </Menu>
);

export default function RawDropdown() {
  const [visible, setVisible] = React.useState(false);

  return (
      <Dropdown
        visible={visible}
        onVisibleChange={setVisible}
        overlay={menu}
        data-testid="control-container1"
        getPopupContainer={() => document.body}
      >
        <a className="ant-dropdown-link" href="#" data-testid="dropdown-link">
          Hover me
        </a>
      </Dropdown>
  );
}
