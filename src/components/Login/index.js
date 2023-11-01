import React, { Suspense } from "react";
import style from "./login.module.css";

const LoginComponent = () => {
  return (
    <div className="container">
      <div className="row">
        {/* For small screens: Two columns */}
        <div className="col-md-6">
          <p className={style.creativityWebSubTitle}>
            Explorez les meilleures
            <br /> créations pour vous.
          </p>

          <div className={style.description}>
            Utiliser notre application ne se limite pas à être un simple
            utilisateur. c'est devenir un membre spécial de notre communauté.
          </div>
        </div>
        <div className={style.linkSignUp}>Inscrivez-vous gratuitement</div>
        <div className={style.linkSignIn}>Se connecter</div>
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
