import React from "react";
import styles from "./Recognition.module.scss";
import Image from "next/image";

const Recognition = () => {
  return (
    <div className="container">
      <div className="row text-center">
        <div className="col-12">
          <h2 className={styles.title}>Synergy&apos;s National Recognition</h2>
        </div>

        <div className="col-md-6 sm-12">
          <Image
            className={styles.mobileWidth}
            width={440}
            height={476}
            src="/images/featured1.png"
            alt="featured1"
          />
        </div>
        <div className="col-md-6 sm-12 m-auto">
          <p className={styles.p}>
            Synergy eTherapy is proud to be recognized as one of the{" "}
            <strong className={styles.strong}>
              BEST ONLINE THERAPY SERVICE IN 2023
            </strong>{" "}
            by Forbes Health!
          </p>
          <button className={styles.button}>View Article</button>
        </div>

        <div className="col-md-6 sm-12 m-auto">
          <p className={styles.p}>
            Synergy eTherapy is proud to be named{" "}
            <strong className={styles.strong}>
              ONE OF THE TOP ONLINE THERAPY PLATFORMS IN 2022 FOR TEENS
            </strong>{" "}
            for our night/weekend options in choosing therapy!
          </p>
          <button className={styles.button}>View Article</button>
        </div>
        <div className="col-md-6 sm-12">
          <Image
            className={styles.mobileWidth}
            width={440}
            height={378}
            src="/images/featured2.png"
            alt="featured2"
          />
        </div>

        <div className="col-md-6 sm-12">
          <Image
            className={styles.mobileWidth}
            width={440}
            height={390}
            src="/images/featured3.png"
            alt="featured3"
          />
        </div>
        <div className="col-md-6 sm-12 m-auto">
          <p className={styles.p}>
            Synergy eTherapy is proud to be recognized as the{" "}
            <strong className={styles.strong}>
              BEST ONLINE COUNSELING PROGRAM FOR TEENS IN 2023
            </strong>{" "}
            for our Free Consultations.
          </p>
          <button className={styles.button}>View Article</button>
        </div>
      </div>
    </div>
  );
};

export default Recognition;
