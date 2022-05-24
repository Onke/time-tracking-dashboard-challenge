import { render } from "@testing-library/react";
import React from "react";
import "./dashboard.css";
import profilePicture from "./image-jeremy.png";
import { ActivityCard } from "../card/activityCard";

export const Dashboard = () => {
  function renderActivityCards() {
    const data = [
      { label: "Play" },
      { label: "Play" },
      { label: "Play" },
      { label: "Play" },
      { label: "Play" },
      { label: "Play" },
    ];
    data.forEach((activity) => {
      console.log("222");
      <ActivityCard label={"Yessssss"} />;
    });
  }

  return (
    <div className="container">
      <div className="card">
        <div className="card-top">
          <div className="card-top-flexbox_1">
            <img className="card-top-flexbox_1__picture" src={profilePicture} />
          </div>
          <div className="card-top-flexbox_2">
            <p>Report for</p>
            <p className="card-top-flexbox_2__name">Sterling Archer</p>
          </div>
        </div>
        <div className="card-bottom">
          <ul className="card-bottom__list">
            <li className="card-bottom__list__item">Daily</li>
            <li className="card-bottom__list__item">Weeekly</li>
            <li className="card-bottom__list__item">Monthly</li>
          </ul>
        </div>
      </div>
      <div className="activity-container">{renderActivityCards()}</div>
    </div>
  );
};
