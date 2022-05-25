import React from "react";
import "./activityCard.css";

export const ActivityCard = (props) => {
  const { colour, images, label, timePeriod, duration, previousDuration } =
    props;

  const style = {
    backgroundImage: "url(./images/icon-self-care.svg)",
    backgroundColor: `${colour}`,
  };

  return (
    <div className="activity-card">
      <div className="card-header" style={style}></div>
      <div className="card-body">
        <div className="card-body-top">
          <p className="activity">{label}</p>
          <p className="ellipsis">•••</p>
        </div>
        <p className="duration">32hrs</p>
        <p className="previousDuration">
          Last {timePeriod} - {previousDuration}
        </p>
      </div>
    </div>
  );
};
