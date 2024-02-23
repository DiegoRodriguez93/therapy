import React from "react";
import styles from "./ContactForm.module.scss";

const ContactForm = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className={`col-md-3 sm-12 ${styles.followUs}`}>
            <h2>Follow Us</h2>
            <h2>Newsletter Sign Up</h2>
            <input type="text" name="email" id="email" placeholder="Enter Your Email" />
            <button>Subscribe</button>
            <h2>OUR CONTACT INFO</h2>
            <div>
                <p>Phone: 612-123-1234</p>
                <p>Toll-Free Phone: 612-123-1234</p>
                <p>Fax: 612-123-1234</p>
                <p>Email: info@test.com</p>
            </div>
        </div>
        <div className={`col-md-9 sm-12 ${styles.bgForm}`}>
          <div className="row">
            <div className="col-12 text-center mb-4">
              <h2>Contact Us With General Questions.</h2>
            </div>
            <div className="col-12">
              <input
                type="text"
                name="fullName"
                id="fullName"
                placeholder="Full Name*"
                className={styles.input}
              />
            </div>
            <div className="col-6">
              <input
                type="text"
                name="phone"
                id="phone"
                placeholder="Phone/Mobile*"
                className={styles.input}
              />
            </div>
            <div className="col-6">
              <input
                type="text"
                name="state"
                id="state"
                placeholder="Your State*"
                className={styles.input}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-6">
              <h5>
                Preferred way to be reached:{" "}
                <span className={styles.red}>*</span>
              </h5>
              <input
                type="text"
                name="email"
                id="email"
                placeholder="Email"
                className={styles.input}
              />
            </div>
            <div className="col-6">
              <input
                type="text"
                name="emailAddress"
                id="emailAddress"
                placeholder="Email Address*"
                className={styles.input}
              />
              <input
                type="text"
                name="confirmEmailAddress"
                id="confirmEmailAddress"
                placeholder="Confirm Email Address*"
                className={styles.input}
              />
            </div>
          </div>
          <div className="row mr-3">
            <textarea
              name=""
              className={styles.textArea}
              id=""
              cols={30}
              rows={8}
              placeholder="Feel free to leave us a message..."
            ></textarea>
          </div>
          <div className="row">
            <div className="col-md-6">
              <h5>
                May we leave a voice message:{" "}
                <span className={styles.red}>*</span>
              </h5>

              <input type="radio" defaultChecked name="yes" id="yes" />
              <label htmlFor="yes">Yes</label>
              <input type="radio" name="no" id="No" />
              <label htmlFor="no">No</label>

              <h5>
                I am 18+ years old: <span className={styles.red}>*</span>
              </h5>

              <input type="radio" defaultChecked name="yes1" id="yes1" />
              <label htmlFor="yes">Yes</label>

              <input type="radio" name="no1" id="No1" />
              <label htmlFor="no">No</label>
            </div>
            <div className="col-md-6">
              <h5>
                How did you hear about Synergy eTherapy:{" "}
                <span className={styles.red}>*</span>
              </h5>
              <input
                type="text"
                name="online"
                id="online"
                placeholder="Online Therapy Directory"
                className={styles.input}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <button>SUBMIT FORM</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
