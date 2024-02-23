import Link from "next/link";
import Image from "next/image";
import styles from "./Topbar.module.scss";

const Topbar = () => {
  return (
    <section className={`container-fluid ${styles.sectionContainer}`}>
      <div className="container p-4 d-flex justify-content-center">
        <div className="row">
          <div className="col-md-1 sm-3">
            <Image
              src="/images/topbar-logo.png"
              height={97}
              width={65}
              alt="topbar logo"
            />
          </div>
          <div className="col-9 text-light mt-auto mb-auto">
            Forbes Health named Synergy eTherapy{" "}
            <strong className={styles.strong}>
              BEST OF 2023 FOR ONLINE CBT THERAPY
            </strong>
            and one of the{" "}
            <strong className={styles.strong}>
              BEST ONLINE THERAPY SERVICES OF 2023
            </strong>{" "}
            by Forbes Health!
          </div>
        </div>
      </div>
    </section>
  );
};

export default Topbar;
