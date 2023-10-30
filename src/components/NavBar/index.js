import React from "react";
import { TrademarkCircleOutlined } from "@ant-design/icons";

import style from "./navbar.module.css";
import DropDownLanguages from "../SmallUI/dropDownLanguages";
const NavBar = () => {
  return (
    <div className={`container ${style.logoContainer}`}>
      <div className={style.logoText}>
        HayatM
        <sup>
          {" "}
          <TrademarkCircleOutlined style={{ fontSize: "18px" }} />
        </sup>
      </div>
      <div className={style.languageIcon}>
        <DropDownLanguages />
      </div>
    </div>
  );
};

export default NavBar;
