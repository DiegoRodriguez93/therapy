import React from "react";
import WaveSection from "./Wave";
import styles from "./Therapists.module.scss";
import Image from "next/image";
import TherapistCard from "./TherapistCard";

const THERAPIST_ARR = [
  {
    profileUrl: "/images/t1.jpg",
    therapistName: "Dr. Allison Sikorsky, DNP, PMHNP",
    therapistBio:
      'Dr. Allison Sikorsky, DNP, PMHNP is a board-certified, doctorate level Psychiatric Mental Health Nurse Practitioner and owns "At Your Service" Psychiatry. She and her team provide psychiatric evaluations and treatment with prescription medication in multiple states.',
  },
  {
    profileUrl: "/images/t2.jpeg",
    therapistName: 'Dr. Sandip Buch & Associates. "Skypiatrist" Psychiatrists"',
    therapistTitle:
      "For residents in New York, Illinois, Wisconsin, New Jersey, Connecticut, Michigan, Texas, and California",
    therapistBio:
      "At Skypiatrist, we know that conversations about medication can happen remotely, and we’re committed to meeting the immediate needs of our patients without sacrificing their quality of care.",
  },
  {
    profileUrl: "/images/t3.jpg",
    therapistName:
      "Drs. Sipra Laddha & Shama Rathi Psychiatrists and owners of Luna Joy",
    therapistTitle: "For residents in Georgia, Florida, Alaska & Minnesota",
    therapistBio:
      "Luna Joy is a fully virtual online clinic focused on all aspects of Women’s Wellness including psychotherapy, medication management, nutritional psychiatry and mind-body interventions for general depression, anxiety, ocd as well as those in the peripartum time, miscarriage, infertility, loss, grief, parenting stress, menopause and more.",
  },
  {
    profileUrl: "/images/t4.jpeg",
    therapistName: "Sherlonda Adkins, PA-C. PsychMyWay",
    therapistTitle: "For residents in South Carolina",
    therapistBio:
      "PsychMYway is a South Carolina based outpatient telepsychiatry practice that specializes in the treatment of children, adolescents, and adults that are challenged by mental health difficulties.",
  },
  {
    profileUrl: "/images/t5.png",
    therapistName: "Remedy",
    therapistTitle: "For residents in California",
    therapistBio:
      "Remedy is a California based outpatient telepsychiatry practice that specializes in the treatment of children, adolescents, and adults that are challenged by mental health difficulties.",
  },
  {
    profileUrl: "/images/t6.webp",
    therapistName: "Talkiatry",
    therapistTitle: "National telepsychiatrists for kids and adults",
    therapistBio:
      "Talkiatry is an online outpatient telepsychiatry group practice that specializes in the treatment of children, adolescents, and adults that are challenged by mental health difficulties. They are in network with most major insurances.",
  },
  {
    profileUrl: "/images/t7.png",
    therapistName:
      "Dr. Buchana-Cummings, DNP, PMHNP, BC Welina Psychiatric Health Services, LLC.",
    therapistTitle: "For residents in Georgia, Iowa, New York & other states",
    therapistBio:
      "Welina is a Georgia based outpatient telepsychiatry practice that specializes in the treatment of adults that are challenged by mental health difficulties.",
  },
  {
    profileUrl: "/images/t8.png",
    therapistName: "TelePsych Health",
    therapistTitle: "For residents in multiple states!",
    therapistBio:
      "TelePsych Health is an outpatient telepsychiatry practice that specializes in the treatment of children and adults that are challenged by mental health difficulties.",
  },
];

const Therapists = () => {
  return (
    <section>
      <div className="container">
        <div className="row">
          <div className={`col-12 ${styles.telemedicineSection}`}>
            <h2>Telemedicine Referral Options</h2>
            <h3>
              Synergy eTherapy refers to several telemedicine psychiatric
              providers who are known and vetted!
            </h3>
            <h3>Please see the options and states below to learn more.</h3>
          </div>
        </div>
      </div>
      <div className={styles.bg}>
        <WaveSection />
        <div className={`${styles.bg} container`}>
          <div className={styles.title}>
            <h2>
              Synergy eTherapy Also Refers To A Few Amazing Tele-Psychiatry
              Groups:
            </h2>
          </div>
          {THERAPIST_ARR.map(
            ({ profileUrl, therapistName, therapistTitle, therapistBio }) => (
              <TherapistCard
                key={therapistName}
                profileUrl={profileUrl}
                therapistName={therapistName}
                therapistTitle={therapistTitle}
                therapistBio={therapistBio}
              />
            )
          )}
          <div className={styles.subtitle}>
            <h3>
              If at any time you feel suicidal, STOP and please call 9-1-1
              immediately or go to your local emergency room. This site is not
              intended, nor equipt to handle crisis situations.
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Therapists;
