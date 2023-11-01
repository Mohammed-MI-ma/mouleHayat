import React, { Suspense } from "react";
import style from "./login.module.css";

const LoginComponent = () => {
  return (
    <div className="container">
      <div className="row">
        {/* For small screens: Two columns */}
        <div className="col-md-6">
          <p className={style.creativityWebTitle}>
            Explorez les meilleures créations artisanales pour vous.
          </p>
          <p className={style.ownerInfo}>
            <span className={style.ownerName}>
              Utiliser notre application ne se limite pas à être un simple
              utilisateur ; c'est devenir un membre spécial de notre communauté.
          
            </span>
            &nbsp;,
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
      <LoginComponent />
    </Suspense>
  );
};

export default LoginWithSuspense;
