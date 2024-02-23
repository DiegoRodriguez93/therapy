import React from "react";
import styles from "./ServiceBanner.module.scss";

const ServiceBanner = () => {
  return (
    <div className={`${styles.serviceBanner} container-fluid`}>
      <div className="row w-100 h-100">
        <div className={`col-md-6 ${styles.left}`}></div>
        <div className="col-md-6 text-center d-flex justify-center align-items-center">
          <h2>Online Medication Management Referral Options</h2>
        </div>
      </div>
    </div>
  );
};

export default ServiceBanner;
