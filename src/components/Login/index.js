import React, { Suspense } from "react";
import { useTranslation } from "react-i18next";
import style from "./login.module.css";


const LoginComponent = () => {
  const { t } = useTranslation();

  return (
    <div className="container">
      <div className="row">
        {/* For small screens: Two columns */}
        <div className="col-md-6">
          <p className={style.creativityWebTitle}>Explorez les meilleures créations artisanales pour vous.</p>
          <p className={style.ownerInfo}>
          
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

const LoginWithSuspense = () => {

  return (
    <Suspense fallback={<LoadingFallback />}>
     <LoginComponent/>
    </Suspense>
  );
};

export default LoginWithSuspense;
