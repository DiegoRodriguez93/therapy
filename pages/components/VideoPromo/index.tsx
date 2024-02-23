import React from "react";
import styles from "./VideoPromo.module.scss";
import InfoCard from "../InfoCard";

const cardData = [
  {
    backgroundImage:
      "https://www.synergyetherapy.com/wp-content/uploads/2023/03/happy-young-woman-on-a-urban-backgraound.jpg",
    title: "Online Counseling for Depression",
    bodyText:
      "Improve coping skills and gain a more balanced perspective that will improve your mood.",
    link: "https://www.synergyetherapy.com/depression-counseling/",
  },
  {
    backgroundImage:
      "https://www.synergyetherapy.com/wp-content/uploads/2023/03/counsel.jpg",
    title: "Online Counseling for Anxiety",
    bodyText:
      "Learn mind/body techniques that will help reduce stress or anxiety. Get back a sense of control.",
    link: "https://www.synergyetherapy.com/anxiety-treatment/",
  },
  {
    backgroundImage:
      "https://www.synergyetherapy.com/wp-content/uploads/2023/03/happy-afro-american-couple.jpg",
    title: "Online Counseling for Couples",
    bodyText:
      "Learn new techniques to communicate more effectively and improve your relationship.",
    link: "https://www.synergyetherapy.com/couples-counseling/",
  },
  {
    backgroundImage:
      "https://www.synergyetherapy.com/wp-content/uploads/2023/03/male-college-student-outside-library.jpg",
    title: "Online Counseling for College Students",
    bodyText:
      "The transition to college is both exciting and overwhelming. Support to help you thrive is here for you!",
    link: "https://www.synergyetherapy.com/counseling-for-college-students/",
  },
  {
    backgroundImage:
      "https://www.synergyetherapy.com/wp-content/uploads/2023/03/group-of-teens-walking-outdoors.jpg",
    title: "Online Counseling for Teens",
    bodyText:
      "Teens love their technology, so lets use it for mental wellness! Learn how to manage your emotions and behaviors.",
    link: "https://www.synergyetherapy.com/teen-adolescent-counseling/",
  },
  {
    backgroundImage:
      "https://www.synergyetherapy.com/wp-content/uploads/2023/03/consulting-client-on-video-call.jpg",
    title: "Online Counseling for Trauma",
    bodyText:
      "Evidence-based treatments to reduce symptoms of trauma really can help you feel better quickly.",
    link: "https://www.synergyetherapy.com/trauma-therapy-ptsd-treatment/",
  },
];

const VideoPromo = () => {
  return (
    <section className={`container-fluid ${styles.videoPromo}`}>
      <div className={`container`}>
        <div className="row mt-5 mb-5">
          <div className="col-md-6 sm-12">
            <video
              className={styles.video}
              playsInline
              controls
              poster="https://i.ytimg.com/vi/gI2-eXS6JRM/maxresdefault.jpg"
              style={{ width: "100%", height: "auto" }}
              src="https://rr2---sn-5hne6n6l.googlevideo.com/videoplayback?expire=1708312692&ei=FHTSZZLpKoG41wL_8q_IDA&ip=45.192.133.115&id=o-ABvlsS5KM-hoGvckkq-LM99F_QMV2gHzvhOXl0iLd8n6&itag=22&source=youtube&requiressl=yes&xpc=EgVo2aDSNQ%3D%3D&mh=J1&mm=31%2C29&mn=sn-5hne6n6l%2Csn-5hneknek&ms=au%2Crdu&mv=u&mvi=2&pl=23&vprv=1&mime=video%2Fmp4&cnr=14&ratebypass=yes&dur=123.599&lmt=1688917614117635&mt=1708290680&fvip=2&fexp=24007246&c=TVAPPLE&txp=6211224&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cxpc%2Cvprv%2Cmime%2Ccnr%2Cratebypass%2Cdur%2Clmt&sig=AJfQdSswRQIhAOLftU657yA7OLBJj-YDU1gDfHNd2ShY4djxozfQ08O5AiB56_z8ZJqqVpjd8ac7o8HcmQS1ka8zbEFux7QC_zn3vw%3D%3D&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl&lsig=APTiJQcwRAIgCdHKbcEWHEP72VEH8fBTKOJRPVXikREliDMegR4Jp7sCIBjrtJTJUvub75ddGRYmWtz4HXDJqZOQqOo0H6QeBmi_"
            ></video>
            <h5>
              Watch our video above to learn more about Synergy eTherapy’s
              services!
            </h5>
          </div>
          <div className="col-md-6 sm-12">
            <h2>Synergy eTherapy Can Help You Feel Better!</h2>
            <p>
              At Synergy eTherapy, we offer a variety of online therapy services
              to help you focus on you! We take the stress out of getting the
              mental health services you deserve.{" "}
            </p>
            <br />
            <p>
              Synergy eTherapy allows you to attend counseling in the comfort of
              your surroundings. When you contact Synergy eTherapy, you will
              meet down-to-earth, kind, and solution-oriented online therapists.
              We are ready to support you as you find deeper meaning in your
              busy life.
            </p>
            {/* Aquí puedes añadir contenido adicional o información sobre el video */}
          </div>
        </div>
        <div className="row">
          <div className="col-12 text-center mb-5">
            <h2>We Support You On Your Mental Health Journey!</h2>
          </div>
          {cardData.map((card, index) => (
            <div key={index} className="col-md-4 sm-12 mb-4">
              <InfoCard
                backgroundImage={card.backgroundImage}
                title={card.title}
                bodyText={card.bodyText}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoPromo;
