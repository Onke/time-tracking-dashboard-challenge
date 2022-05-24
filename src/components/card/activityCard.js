import React from "react";
import "./activityCard.css";

export const ActivityCard = (props) => {
  const { colour, image, label, timePeriod, duration, previousDuration } =
    props;

  console.log({ props });

  return (
    <div className="card">
      <div className="card-header"></div>
      <div className="card-body">
        <div className="card-body-top">
          <p className="activity">{label}</p>
          <p className="ellipsis">•••</p>
        </div>
        <p className="duration">{duration}</p>
        <p className="previousDuration">
          Last {timePeriod} - {previousDuration}
        </p>
      </div>
    </div>
  );
};
