import React, { FC } from "react";
import styles from './InfoCard.module.scss'

type InfoCardProps = {
  backgroundImage: string;
  title: string;
  bodyText: string;
};

const InfoCard: FC<InfoCardProps> = ({ backgroundImage, title, bodyText }) => {
  const cardStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center center",
    display: "flex",
    alignItems: "end",
    justifyContent: "flex-end",
    flexDirection: "column",
    height: "600px",
    color: "#fff",
    padding: "20px",
    borderRadius: "8px",
    border: "3px solid black",
  };

  const squareStyle = {
    backgroundColor: "#FFFFFFED",
    padding: "0px 5px 0px 5px",
    borderStyle: "solid",
    borderWidth: " 0px 0px 0px 0px",
    borderColor: "#f5f5f5",
    borderRadius: "4px 4px 4px 4px",
    color: "black",
    marginTop: "auto",
    display: "block",
  };

  return (
    /* @ts-expect-error */
    <div style={cardStyle} className={styles.infoCard}>
      <div className="row">
        <div className="col-12 text-center">
          <div style={squareStyle} className={styles.square}>
            <h3>{title}</h3>
            <p>{bodyText}</p>
          </div>
        </div>
      </div>
      <div className="row text-center w-100">
        <div className="col-12">
          <button className={styles.button}>Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
