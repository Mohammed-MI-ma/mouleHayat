import React from "react";
import fr from "../../assets/svg/fr.svg";
import an from "../../assets/svg/gb.svg";
import { useTranslation } from "react-i18next";

import { Avatar, Dropdown, Space } from "antd";
import { SiInformatica } from "react-icons/si";

import style from "./aboutMe.module.css";

const AboutMeComponent = () => {
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
          <SiInformatica style={{ fontSize: "24px" }} />{" "}
      </div>
    </Dropdown>
  );
};
export default AboutMeComponent;
