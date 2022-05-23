import React from "react";
import "./dashboard.css";
import profilePicture from "./image-jeremy.png";

export const Dashboard = () => {
  return (
    <div className="content">
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
            <li className="card-bottom__list__item card-bottom__list__item--active">
              Daily
            </li>
            <li className="card-bottom__list__item card-bottom__lis__item--active">
              Weeekly
            </li>
            <li className="card-bottom__list__item card-bottom__list__item--active">
              Monthly
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
