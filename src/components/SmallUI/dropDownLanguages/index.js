import React from "react";
import fr from "../../assets/svg/fr.svg";
import an from "../../assets/svg/gb.svg";

import { Avatar, Dropdown, Space } from "antd";
import { TranslationOutlined } from "@ant-design/icons";

const items = [
  {
    label: (
      <a>
        <Space>

          <Avatar src={<img src={fr} alt="avatar" />} />
          <span>Francais</span>
        </Space>
      </a>
    ),
    key: "0",
  },
  {
    label: (
      <a>
        <Space>
  
          <Avatar src={<img src={an} alt="avatar" />} />
          <span>Anglais</span>
        </Space>
      </a>
    ),
    key: "1",
  },
];
const DropDownLanguages = () => (
  <Dropdown
    menu={{
      items,
    }}
    trigger={["click"]}
  >
    <a onClick={(e) => e.preventDefault()}>
      <Space>
        <TranslationOutlined style={{ fontSize: "24px" }} />{" "}
      </Space>
    </a>
  </Dropdown>
);
export default DropDownLanguages;
