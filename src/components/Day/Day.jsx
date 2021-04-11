import React from "react";
import classes from "../../App.module.scss";

const Day = (props) => {
  return (
    <div className={classes.Day}>
      <span className={classes.Title}>{props.day}</span>
    </div>
  );
};

export default Day;
