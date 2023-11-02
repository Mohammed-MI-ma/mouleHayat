import React, { Suspense } from "react";
import style from "./login.module.css";
import { useTranslation } from "react-i18next";
import { Badge, Image } from "antd";
import img from "../assets/png/AR.png";

const LoginComponent = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="container">
      <Badge.Ribbon text="Nouveau" placement={"end"}>
        <div className="row">
          {/* For small screens: Two columns */}
          <div className="col-md-6">
        

            <p className={style.creativityWebSubTitle}>{t("exploreText")}</p>
      

            <div className={style.description}>{t("exploreDesc")}</div>
          </div>
          <br />
          <br />
          <div className={style.description}>{t("accessGranted")}</div>
        </div>      </Badge.Ribbon>
      </div>{" "}
      <Image src={img} alt="Animation Frame" preview={false} />
    </>
  );
};

const LoadingFallback = () => {
  return <div>Loading translations...</div>;
};

const LoginWithSuspense = () => {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <LoginComponent />
    </Suspense>
  );
};

export default LoginWithSuspense;
