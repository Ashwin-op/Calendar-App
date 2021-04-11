import { useRef, useState } from "react";
import { DATE, MONTH_NAMES } from "../../utils/constants";
import classes from "./Calendar.module.scss";
import PopUp from "../PopUp/PopUp";

const Tile = (props) => {
  const [seen, setSeen] = useState(false);

  const styleDateClasses = [classes.Tile];
  const styleSpanClasses = [classes.Text];
  const scrollRef = useRef(null);
  let span = <span className={styleSpanClasses.join(" ")}>{props.value}</span>;
  let postEntry = null;
  if (props.postMonth === props.month && props.postDay === props.value) {
    postEntry = (
      <div>
        <img className={classes.PostImg} src={props.postImg} alt="post" />
        {seen ? (
          <PopUp
            imgSrc={props.postImg}
            popUpClosed={props.popUpHandler}
            postText={props.postText}
            postMonth={props.month}
            postDay={props.postDay}
            postYear={props.postYear}
            show={seen}
          />
        ) : null}
      </div>
    );
  }
  if (props.day === 0) {
    styleDateClasses.push(classes.Sunday);
  }
  if (props.activeMonth) {
    styleDateClasses.push(classes.ActiveMonth);
  }
  if (props.value === DATE.getDate()) {
    if (
      (props.value === 1 && props.month - 1 === DATE.getMonth()) ||
      (props.value !== 1 && props.month - 1 === DATE.getMonth())
    ) {
      styleSpanClasses.push(classes.Active);
      span = (
        <span
          id="scrollTo"
          ref={scrollRef}
          className={styleSpanClasses.join(" ")}
        >
          {props.value}
        </span>
      );
    }
  }
  const popUpHandler = () => {
    setSeen((seen) => !seen);
  };
  return (
    <div className={styleDateClasses.join(" ")} onClick={popUpHandler}>
      {props.value === 1 ? (
        <div className={classes.Month}>
          {MONTH_NAMES[props.month - 1].substr(0, 3)}
        </div>
      ) : null}
      {span}
      {postEntry}
    </div>
  );
};

export default Tile;
