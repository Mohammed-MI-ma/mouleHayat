import React from "react";

import style from "./navbar.module.css";
import DropDownLanguages from "../SmallUI/dropDownLanguages";
import { Button, Image } from "antd";
import logoImage from "../assets/png/logo1.png"; // Replace with the actual path to your logo image
import AboutMeComponent from "../SmallUI/aboutMeComponent";
import DonationComponent from "../SmallUI/donationComponent";

const NavBar = () => {
  return (
    <>
      <div className={`container ${style.logoContainer}`}>
        <div
          className={` animate__animated animate__slideInLeft ${style.logoText}`}
        >
          <div>
            <Image
              src={logoImage}
              alt="Logo"
              preview={false}
              style={{ width: "100px" }}
            />
          </div>
        </div>
        <div
          className={`animate__animated animate__slideInRight ${style.menuContainer}`}
        >
          <Button className={`${style.languageIcon}`}>
            <DropDownLanguages />
          </Button>
          <Button className={`${style.languageIcon}`}>
            <DonationComponent />
          </Button>
          <Button className={`${style.languageIcon}`}>
            <AboutMeComponent />
          </Button>
        </div>
      </div>
    </>
  );
};

export default NavBar;
