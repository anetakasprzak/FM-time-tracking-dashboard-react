/* eslint react/prop-types: 0 */
import data from "./data.json";
import { useState } from "react";

function App() {
  const [filter, setFilter] = useState("daily");

  return (
    <div className="wrapper">
      <UserCard setFilter={setFilter} />

      {data?.map((el, i) => (
        <ActivityCard i={i} key={el.title} el={el} filter={filter} />
      ))}
    </div>
  );
}

function UserCard({ setFilter }) {
  return (
    <div className="user__card">
      <div className="user__timeframes-box">
        <div className="user__details">
          <img className="user__img" src="../public/images/image-jeremy.png" />
          <div className="user__text-box">
            <p className="user__report">Report for</p>
            <p className="user__name">Jeremy Robson</p>
          </div>
        </div>
        <div className="btn__box">
          <button
            onClick={() => setFilter("daily")}
            className="timeframes__btn"
          >
            Daily
          </button>
          <button
            onClick={() => setFilter("weekly")}
            className="timeframes__btn"
          >
            Weekly
          </button>
          <button
            onClick={() => setFilter("monthly")}
            className="timeframes__btn"
          >
            Monthly
          </button>
        </div>
      </div>
    </div>
  );
}

function ActivityCard({ el, i, filter }) {
  const isDaily = filter === "daily";
  const isWeekly = filter === "weekly";
  const isMonthly = filter === "monthly";

  return (
    <div className={`card__color-wrapper card__color-wrapper--${i + 1}`}>
      <div className={`card__box card__box--${i + 1}`}>
        <div className="title__box">
          <h4 className="card__title">{el.title}</h4>
          <img
            className="card__dots"
            src="../public/images/icon-ellipsis.svg"
          />
        </div>
        <div className="card__hours-box">
          <h2 className="card__hours--main">
            {isDaily && `${el.timeframes.daily.current}hrs`}
            {isWeekly && `${el.timeframes.weekly.current}hrs`}
            {isMonthly && `${el.timeframes.monthly.current}hrs`}
          </h2>
          <p className="card__hours--previous">
            {isDaily && `Yesterday - ${el.timeframes.daily.previous}hrs`}
            {isWeekly && `Last week - ${el.timeframes.weekly.previous}hrs`}
            {isMonthly && `Last month - ${el.timeframes.monthly.previous}hrs`}
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
