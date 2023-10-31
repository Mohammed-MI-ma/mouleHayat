import React from "react";

import style from "./navbar.module.css";
import DropDownLanguages from "../SmallUI/dropDownLanguages";
import { Button, Image } from "antd";
import logoImage from "../assets/png/logo.png"; // Replace with the actual path to your logo image

const NavBar = () => {
  return (
    <>
      <div className={`container ${style.logoContainer}`}>
        <div className={style.logoText}>
          <div style={{ position: "relative" }}>
            <Image
              src={logoImage}
              alt="Logo"
              preview={false}
              style={{ width: "120px" }}
            />
            <div
              style={{
                borderRadius: " 50%",
                background: "white",
                width: "80px",
                height: "80px",
                position: "absolute",
                top: " 0",
                left: "0",
                transform: " translate(20px, 20px)",
                zIndex: "-1",
              }}
            ></div>
          </div>
          HayatMoul
        </div>

        <Button className={style.languageIcon}>
          <DropDownLanguages />
        </Button>
      </div>
    </>
  );
};

export default NavBar;
