import React from "react";
import fr from "../../assets/svg/fr.svg";
import an from "../../assets/svg/gb.svg";
import { useTranslation } from "react-i18next";
import i18n from "i18next"; // Import the i18n instance to change the language

import { Avatar, Dropdown, Space } from "antd";
import { MdGTranslate } from "react-icons/md";

import style from "./dropDown.module.css";

const DropDownLanguages = () => {
  const { t } = useTranslation();
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
  const items = [
    {
      label: (
        <Space onClick={() => changeLanguage("fr")}>
          <Avatar src={<img src={fr} alt="Fr" />} />
          <span className={style.lang} style={{ cursor: "pointer" }}>
            {t("french")}
          </span>
        </Space>
      ),
      key: "0",
    },
    {
      label: (
        <Space
          onClick={() => changeLanguage("an")}
          style={{ cursor: "pointer" }}
        >
          <Avatar src={<img src={an} alt="En" />} />
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
