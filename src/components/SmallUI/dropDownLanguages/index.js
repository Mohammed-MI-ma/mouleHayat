import React from "react";
import fr from "../../assets/svg/fr.svg";
import an from "../../assets/svg/gb.svg";
import { useTranslation } from "react-i18next";

import { Avatar, Dropdown, Space } from "antd";
import { MdGTranslate } from "react-icons/md";

import style from "./dropDown.module.css";

const DropDownLanguages = () => {
  const { t } = useTranslation();
  const items = [
    {
      label: (
        <Space>
          <Avatar src={<img src={fr} alt="avatar" />} />
          <span className={style.lang}>{t("french")}</span>
        </Space>
      ),
      key: "0",
    },
    {
      label: (
        <Space>
          <Avatar src={<img src={an} alt="avatar" />} />
          <span className={style.lang}>{t("english")}</span>
        </Space>
      ),
      key: "1",
    },
  ];
  return (
    <Dropdown
      menu={{
        items,
      }}
      trigger={["click"]}
    >
      <div onClick={(e) => e.preventDefault()}>
          <MdGTranslate style={{ fontSize: "24px" }} />{" "}
      </div>
    </Dropdown>
  );
};
export default DropDownLanguages;
