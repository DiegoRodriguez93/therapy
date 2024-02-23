// components/VideoBackground.js
import React from "react";
import styles from "./VideoBackground.module.scss"; // Asume que tienes un archivo SCSS para estilos

const VideoBackground = () => {
  return (
    <section className={`container-fluid ${styles.videoSection}`}>
      <div className={styles.overlay}></div>
      <div className={styles.videoContainer}>
        <video
          className={styles.video}
          autoPlay
          muted
          loop
          playsInline
          style={{ width: "100%", height: "auto" }}
          src="https://www.synergyetherapy.com/wp-content/uploads/2023/04/young-woman-online-meeting.mp4"
        ></video>
      </div>
      <div className={styles.overlay}></div>
      <div className={styles.content}>
        <h1>Online Counseling</h1>
        <h2>to help you thrive!</h2>
        <h3>Lets get started with a free consultation!</h3>
        <h3>Please Choose Who Counseling Is For:</h3>
        <div className={styles.buttons}>
          <a
            href="#"
            className={styles.button}
          >
            An Adult
          </a>
          <a
            href="#"
            className={styles.button}
          >
            A Child / Teen
          </a>
          <a
            href="#"
            className={styles.button}
          >
            A Couple
          </a>
        </div>
      </div>
    </section>
  );
};

export default VideoBackground;
