import React from "react";
import styles from "./PromoBanner.module.scss";

const PromoBanner = () => {
  return (
    <div className={`${styles.background} container-fluid`}>
      <div className="container m-auto">
        <div className="row">
          <div className="col-12 text-center">
            Start Today With A Free Consultation{" "}
            <button className={styles.button}>Let&apos;s Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromoBanner;
