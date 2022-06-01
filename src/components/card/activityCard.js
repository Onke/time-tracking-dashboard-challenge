import React from "react";
import "./activityCard.css";
import iconWork from "./images/icon-work.png";
import iconPlay from "./images/icon-play.png";
import iconStudy from "./images/icon-study.png";
import iconExcercise from "./images/icon-exercise.png";
import iconSocial from "./images/icon-social.png";
import iconSelfCare from "./images/icon-self-care.png";

export const ActivityCard = (props) => {
  const { colour, label, timePeriod, duration, previousDuration } = props;

  const backgroundImages = {
    Work: iconWork,
    Play: iconPlay,
    Study: iconStudy,
    Exercise: iconExcercise,
    Social: iconSocial,
    "Self Care": iconSelfCare,
  };

  const style = {
    backgroundImage: `url(${backgroundImages[label]})`,
    backgroundColor: colour,
  };

  return (
    <div className="activity-card">
      <div className="card-header" style={style}></div>
      <div className="card-body">
        <div className="card-body-top">
          <p className="activity">{label}</p>
          <p className="ellipsis">•••</p>
        </div>
        <p className="duration">{duration}hrs</p>
        <p className="previousDuration">
          Last {timePeriod} - {previousDuration}hrs
        </p>
      </div>
    </div>
  );
};
