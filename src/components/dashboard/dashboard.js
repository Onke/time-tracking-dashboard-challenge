import { render } from "@testing-library/react";
import React from "react";
import "./dashboard.css";
import profilePicture from "./image-jeremy.png";
import { ActivityCard } from "../card/activityCard";

export const Dashboard = () => {
  const data = [
    {
      title: "Work",
      timeframes: {
        daily: {
          current: 5,
          previous: 7,
        },
        weekly: {
          current: 32,
          previous: 36,
        },
        monthly: {
          current: 103,
          previous: 128,
        },
      },
    },
    {
      title: "Play",
      timeframes: {
        daily: {
          current: 1,
          previous: 2,
        },
        weekly: {
          current: 10,
          previous: 8,
        },
        monthly: {
          current: 23,
          previous: 29,
        },
      },
    },
    {
      title: "Study",
      timeframes: {
        daily: {
          current: 0,
          previous: 1,
        },
        weekly: {
          current: 4,
          previous: 7,
        },
        monthly: {
          current: 13,
          previous: 19,
        },
      },
    },
    {
      title: "Exercise",
      timeframes: {
        daily: {
          current: 1,
          previous: 1,
        },
        weekly: {
          current: 4,
          previous: 5,
        },
        monthly: {
          current: 11,
          previous: 18,
        },
      },
    },
    {
      title: "Social",
      timeframes: {
        daily: {
          current: 1,
          previous: 3,
        },
        weekly: {
          current: 5,
          previous: 10,
        },
        monthly: {
          current: 21,
          previous: 23,
        },
      },
    },
    {
      title: "Self Care",
      timeframes: {
        daily: {
          current: 0,
          previous: 1,
        },
        weekly: {
          current: 2,
          previous: 2,
        },
        monthly: {
          current: 7,
          previous: 11,
        },
      },
    },
  ];

  function ActivityCards() {
    data.forEach((activity) => {
      console.log("222");

      return (
        <div>
          <ActivityCard
            label={activity.title}
            timePeriod="Week"
            previousDuration="36hrs"
            colour="white"
          />
        </div>
      );
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
      <div className="activity-container">
        {data.map((activity) => (
          <ActivityCard
            label={activity.title}
            timePeriod="Week"
            previousDuration="36hrs"
            colour="white"
          />
        ))}
      </div>
    </div>
  );
};
