import React, { Suspense } from "react";
import { useTranslation } from "react-i18next";
import style from "./hero.module.css";
import img from "../assets/png/about.jpeg";
import { Image } from "antd";

const Hero = () => {
  const { t } = useTranslation();

  return (
    <div className="container">
      <div className="row">
        {/* For small screens: Two columns */}
        <div className="col-md-6">
          <p className={style.creativityWebTitle}>{t("creativityWebTitle")}</p>
          <p className={style.ownerInfo}>
            <span className={style.ownerName}>{t("Owner")}</span>&nbsp;,
            <span className={style.ownerJob}>{t("Job")}</span>
          </p>{" "}
        </div>
        {/* Add your other content here */}
      </div>
    </div>
  );
};

const LoadingFallback = () => {
  return <div>Loading translations...</div>;
};

const HeroWithSuspense = () => {
  const { t } = useTranslation();

  return (
    <Suspense fallback={<LoadingFallback />}>
      <div style={{marginTop:"125px"}}></div>
      <div className={`container ${style.logoContainer}`} >

        <span>{t("abstractArt")}</span>
        <span>{t("oilPaintings")}</span>
        <span>{t("landscapes")}</span>
        <span>{t("sculpture")} </span>
      </div>

      <Hero />
      <Image src={img} alt="Animation Frame" />
    </Suspense>
  );
};

export default HeroWithSuspense;
