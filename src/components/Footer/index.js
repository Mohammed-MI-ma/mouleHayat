import React, { Suspense } from "react";
import style from "./login.module.css";

const FooterComponent = () => {
  return (
    <footer className="container">
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
