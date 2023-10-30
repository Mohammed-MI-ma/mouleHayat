import React, { Suspense } from "react";
import { useTranslation } from "react-i18next";
import { motion } from 'framer-motion';

import style from "./hero.module.css";

const Hero = () => {
  const { t } = useTranslation();

  return (
    <motion.div
    initial={{ opacity: 0, x: -100 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 2 }}
  >
    <div className="container">
      <div className="row">
        {/* For small screens: Two columns */}
        <div className="col-md-6">
          <p className={style.creativityWebTitle}>{t("creativityWebTitle")}</p>
          <p className={style.ownerInfo}>
            <span className={style.ownerName}>{t("Owner")}</span>&nbsp;,<span className={style.ownerJob}>{t("Job")}</span>
          </p>{" "}
        </div>
        {/* Add your other content here */}
      </div>
    </div>    </motion.div>

  );
};

const LoadingFallback = () => {
  return <div>Loading translations...</div>;
};

const HeroWithSuspense = () => {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <Hero />
    </Suspense>
  );
};

export default HeroWithSuspense;
