import Image from "next/image";
import React, { FC } from "react";
import styles from "./Therapists.module.scss";

type TherapistProps = {
  profileUrl: string;
  therapistName: string;
  therapistTitle?: string;
  therapistBio: string;
};

const TherapistCard: FC<TherapistProps> = ({
  profileUrl,
  therapistName,
  therapistTitle,
  therapistBio,
}) => {
  return (
    <div className={`${styles.therapistCard} row`}>
      <div className="col-md-4 sm-12">
        <Image
          src={profileUrl}
          height={255}
          width={255}
          alt={`${therapistName} image`}
        />
      </div>
      <div className="col-md-8 sm-12">
        <h2>{therapistName}</h2>
        <h3 className="mt-3">{therapistTitle}</h3>
        <p className="mt-3">{therapistBio}</p>
      </div>
    </div>
  );
};

export default TherapistCard;
