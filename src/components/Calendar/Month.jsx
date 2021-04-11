import { useEffect, useRef } from "react";
import { MONTH_NAMES } from "../../utils/constants";
import classes from "./Calendar.module.scss";

let obs;

const Month = (props) => {
  const monthRef = useRef();
  useEffect(() => {
    obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.intersectionRatio >= 0.8) {
            props.onVisible(props.monthId);
          }
        });
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 1,
      }
    );
    obs.observe(monthRef.current);
  });
  return (
    <div
      className={classes.Months}
      id={MONTH_NAMES[props.monthId]}
      ref={monthRef}
    >
      {props.children}
    </div>
  );
};

export default Month;
