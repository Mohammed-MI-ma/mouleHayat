import React, { Suspense } from "react";
import style from "./footer.module.css";
import { Image } from "antd";
import logoImage from "../assets/png/logo1.png"; // Replace with the actual path to your logo image
import { AiFillFacebook ,AiFillInstagram} from "react-icons/ai";
import { BiLogoGmail} from "react-icons/bi";

const FooterComponent = () => {
  return (
    <footer className="container">
      <div className={style.container}>
        <Image
          src={logoImage}
          alt="Logo"
          preview={false}
          style={{ width: "70px" }}
        />
      </div>
      <div className={style.socialNetworks}>
        <AiFillFacebook   style={{ fontSize: "50px" }} />
        <AiFillInstagram style={{ fontSize: "50px" }} />
        <BiLogoGmail style={{ fontSize: "50px" }} />
      </div>
    </footer>
  );
};

const LoadingFallback = () => {
  return <div>Loading translations...</div>;
};

const FooterWithSuspense = () => {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <FooterComponent />
    </Suspense>
  );
};

export default FooterWithSuspense;
