import React, { useState } from "react";
import classes from "./App.module.scss";
import Calendar from "./components/Calendar/Calendar";
import Day from "./components/Day/Day";
import Navbar from "./components/Navbar/Navbar";
import { DATE, DAY_NAMES, MONTH_NAMES } from "./utils/constants";

function App() {
  const [activeMonth, setActiveMonth] = useState(0);

  return (
    <div>
      <nav className={classes.Nav}>
        <div className={classes.FixedNavbarItems}>
          <Navbar currentMonth={activeMonth} setCurrentMonth={setActiveMonth} />
          <h1 className={classes.Heading}>
            {MONTH_NAMES[activeMonth]}
            <span className={classes.Span}>{" " + DATE.getFullYear()}</span>
          </h1>
        </div>
        <div className={classes.Row}>
          {DAY_NAMES.map((dayName, index) => (
            <Day className={classes.Day} key={index} day={dayName} />
          ))}
        </div>
      </nav>
      <div className={classes.Calendar}>
        <Calendar setActiveMonth={setActiveMonth} activeMonth={activeMonth} />
      </div>
    </div>
  );
}

export default App;
