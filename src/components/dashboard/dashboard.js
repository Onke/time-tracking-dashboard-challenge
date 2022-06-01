import React, { useState } from "react";
import "./dashboard.css";
import profilePicture from "./image-jeremy.png";
import { ActivityCard } from "../card/activityCard";

export const Dashboard = () => {
  const [selectedPeriod, setSelectedPeriod] = useState("daily");
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
      colour: "hsl(15, 100%, 70%)",
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
      colour: "hsl(195, 74%, 62%)",
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
      colour: "hsl(348, 100%, 68%)",
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
      colour: "hsl(145, 58%, 55%)",
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
      colour: "hsl(264, 64%, 52%)",
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
      colour: "hsl(43, 84%, 65%)",
    },
  ];

  const timePeriod = {
    daily: "Yesterday",
    weekly: "Week",
    monthly: "Month",
  };

  return (
    <div className="container">
      <div className="card">
        <div className="card-top">
          <div className="card-top-flexbox_1">
            <img
              className="card-top-flexbox_1__picture"
              src={profilePicture}
              alt={"profile"}
            />
          </div>
          <div className="card-top-flexbox_2">
            <p>Report for</p>
            <p className="card-top-flexbox_2__name">Sterling Archer</p>
          </div>
        </div>
        <div className="card-bottom">
          <ul className="card-bottom__list">
            <li
              className="card-bottom__list__item"
              onClick={() => setSelectedPeriod("daily")}
            >
              Daily
            </li>
            <li
              className="card-bottom__list__item"
              onClick={() => setSelectedPeriod("weekly")}
            >
              Weeekly
            </li>
            <li
              className="card-bottom__list__item"
              onClick={() => setSelectedPeriod("monthly")}
            >
              Monthly
            </li>
          </ul>
        </div>
      </div>
      <div className="activity-container">
        {data.map((activity) => (
          <ActivityCard
            label={activity.title}
            timePeriod={timePeriod[selectedPeriod]}
            previousDuration={activity.timeframes[selectedPeriod].previous}
            duration={activity.timeframes[selectedPeriod].current}
            colour={activity.colour}
            image={activity.image}
          />
        ))}
      </div>
    </div>
  );
};
