import Image from "next/image";
import React from "react";
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={`container-fluid ${styles.footer}`}>
      <div className={styles.backgroundOverlay}></div>
      <div className={`${styles.content} container p-5`}>
        <div className="row">
          <div className="col-md-3 sm-12 text-center">
            <div
              style={{
                width: "100%",
                height: 71,
                backgroundColor: "white",
                paddingTop: "10px",
                borderRadius: "10px",
              }}
            >
              <Image
                src="/images/footer-logo.png"
                width={227}
                height={50}
                alt="footer logo"
              />
            </div>
          </div>
          <div className="col-md-3 sm-12">
            <h4>Quick Links</h4>
            <h6>FAQ</h6>
            <h6>CONTACT US</h6>
            <h6>FIND A THERAh6IST</h6>
            <h6>COST OF SERVICE</h6>
            <h6>PRIVACY POLICY</h6>
            <h6>TERMS OF SERVICE</h6>
          </div>
          <div className="col-md-3 sm-12">
            <h4>Follow Us</h4>
          </div>
          <div className="col-md-3 sm-12">
            <p>
              Join our monthly e-newsletter and receive our FREE guide on coping
              with ANXIETY!
            </p>
            <input
              type="text"
              name="email"
              id="email"
              placeholder="Enter Your Email"
            />
            <button>SUBSCRIBE</button>
          </div>
        </div>
        <hr
          style={{
            width: "100%",
            border: "1px solid #FFF",
          }}
        />
        <div className="row">
          <div className="col-md-6">
            <h5>Copyright © 2023 Synergy eTherapy, All rights reserved.</h5>
          </div>
          <div className="col-md-6">
            <h5> Designed and Developed by Diego Rodriguez</h5>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
