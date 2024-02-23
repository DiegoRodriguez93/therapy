import React from "react";
import WaveSection from "./Wave";
import styles from "./Therapists.module.scss";
import Image from "next/image";
import Icon1 from "./Icon1";
import Icon2 from "./Icon2";

const Therapists = () => {
  return (
    <section className={styles.bg}>
      <WaveSection />
      <div className={`${styles.bg} container`}>
        <div className={styles.title}>
          <h2>Featured Therapists</h2>
          <div className="row">
            <div className="col-md-6 sm-12">
              <p className={styles.leftSideText}>
                <b>Synergy Etherapy</b> offers access to a vast network of
                incredible licensed, experienced and empathic therapists who
                specialize in addressing various concerns such as depression,
                anxiety, relationships, trauma, grief, and more.
              </p>
              <p className={styles.leftSideText}>
                {" "}
                Our therapists provide the same level of professionalism and
                quality as in-office therapists but with the added convenience
                of communicating with them wherever it’s comfortable for you.
              </p>
              <p className={styles.leftSideText}>
                {" "}
                With <b>Synergy Etherapy</b>, you can enhance your mental health
                and overall well-being!
              </p>
              <button className={styles.button}>Choose Your Therapist</button>
            </div>
            <div className="col-md-6 sm-12">
              <div className="row">
                <div className="col-md-6 sm-12">
                  <Image
                    src="/images/therapist1.jpg"
                    height={240}
                    width={240}
                    alt="therapist1"
                    style={{
                      borderRadius: "140px 15px 15px 15px",
                      float: "left",
                    }}
                  />
                  <Image
                    src="/images/therapist2.png"
                    height={202}
                    width={202}
                    alt="therapist2"
                    style={{
                      borderRadius: "100px 15px 15px 15px",
                      float: "right",
                      marginTop: "1.5rem",
                    }}
                  />
                </div>
                <div className="col-md-6 sm-12">
                  <Image
                    src="/images/therapist3.jpg"
                    height={202}
                    width={202}
                    alt="therapist3"
                    style={{
                      borderRadius: "15px 15px 140px 15px",
                      float: "left",
                    }}
                  />
                  <Image
                    src="/images/therapist4.png"
                    height={337}
                    width={337}
                    alt="therapist4"
                    style={{
                      borderRadius: "15px 140px 15px 15px",
                      marginTop: "1.5rem",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-md-6">
              <div className={styles.card} style={{ marginLeft: "auto" }}>
                <div className={styles.hoverEffect}>
                  <div className="cardIcon">
                    <Icon1 />
                  </div>
                  <div className={styles.cardTitle}>
                    Mental Health Intership <br />& Training Program
                  </div>
                </div>
                <button className={styles.cardButton}>Learn More</button>
              </div>
            </div>
            <div className="col-md-6">
              <div className={styles.card}>
                <div className={styles.hoverEffect}>
                  <div className="cardIcon">
                    <Icon2 />
                  </div>
                  <div className={styles.cardTitle}>
                    Online Psychiatric <br />
                    Medication Partners
                  </div>
                </div>
                <button className={styles.cardButton}>Learn More</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Therapists;
