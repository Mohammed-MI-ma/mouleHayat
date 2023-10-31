import React from "react";

import style from "./navbar.module.css";
import DropDownLanguages from "../SmallUI/dropDownLanguages";
import { Button, Image } from "antd";
import logoImage from "../assets/svg/image.svg"; // Replace with the actual path to your logo image

const NavBar = () => {
  return (
    <>
      <div className={`container ${style.logoContainer}`}>
        <div
          className={` animate__animated animate__slideInLeft ${style.logoText}`}
        >
          <div >
            <Image
              src={logoImage}
              alt="Logo"
              preview={false}
              style={{width:"250px"}}
            />
           
          </div>
        </div>
        <Button
          className={` animate__animated animate__slideInRight ${style.languageIcon}`}
        >
          <DropDownLanguages />
        </Button>
      </div>
    </>
  );
};

export default NavBar;
