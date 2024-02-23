import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./Navbar.module.scss";

const Navbar = () => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  return (
    <div className="container-fluid bg-light">
      <nav className="navbar navbar-expand-lg navbar-light bg-light container">
        <Link className={styles.link} href="/">
          <Image src="/images/logo.png" width={272} height={60} alt="Logo" />
        </Link>
        <ul className={styles.ul}>
          <li className={`nav-item ${styles.link}`}>
            <Link className={styles.link} href="/">
              Home
            </Link>
          </li>
          <li className={`nav-item ${styles.link}`}>
            <Link className={styles.link} href="#">
              About
            </Link>
          </li>
          <li className={`nav-item ${styles.services} ${styles.link}`}>
            <Link href="#">Services</Link>
            <div className={styles.submenu}>
              <ul>
                <li className="nav-item">
                  <Link href="/services/psychiatric-medication-managment">
                    Psychiatric Medication Partners
                  </Link>
                </li>
              </ul>
            </div>
          </li>
          <li className={`nav-item ${styles.link}`}>
            <Link className={styles.link} href="#">
              Pricing
            </Link>
          </li>
          <li className={`nav-item ${styles.link}`}>
            <Link className={styles.link} href="#">
              Link & Resources
            </Link>
          </li>
          <li className={`nav-item ${styles.link}`}>
            <Link className={styles.link} href="/contact-us">
              Contact Us
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
