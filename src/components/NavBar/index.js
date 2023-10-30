import React from "react";
import { TranslationOutlined } from "@ant-design/icons";
import style from "./navbar.module.css";
const NavBar = () => {
  return (
    <div className={`container ${style.logoContainer}`}>
      <div className={style.logoText}>Moule.H</div>
      <div className={style.languageIcon}>
        <TranslationOutlined style={{ fontSize: "24px" }} />{" "}
        {/* Ant Design icon */}
      </div>{" "}
    </div>
  );
};

export default NavBar;
