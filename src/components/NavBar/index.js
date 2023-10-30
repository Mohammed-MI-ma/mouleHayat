import React from "react";
import style from "./navbar.module.css";
import DropDownLanguages from "../SmallUI/dropDownLanguages";
const NavBar = () => {
  return (
    <div className={`container ${style.logoContainer}`}>
      <div className={style.logoText}>Hayat Moule</div>
      <div className={style.languageIcon}>
        <DropDownLanguages />
      </div>
    </div>
  );
};

export default NavBar;
