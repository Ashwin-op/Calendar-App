import { MONTH_NAMES } from "../../utils/constants";
import Backdrop from "../Backdrop/Backdrop";
import classes from "./PopUp.module.scss";

const PopUp = (props) => {
  return (
    <>
      <Backdrop show={props.show} clicked={props.popUpClosed} />
      <div className={classes.PopUp}>
        <img className={classes.Img} src={props.imgSrc} alt="post"></img>
        <div className={classes.legendsRatings}>
          <div className={classes.legends}>
            <span className={classes.circle}>M</span>
            <span className={classes.circle}>H</span>
            <span className={classes.circle}>C</span>
            <span className={classes.circle}>DR</span>
          </div>
          <div className={classes.ratings}>
            <a href="#5" title="Give 5 stars">
              ★
            </a>
            <a href="#4" title="Give 4 stars">
              ★
            </a>
            <a href="#3" title="Give 3 stars">
              ★
            </a>
            <a href="#2" title="Give 2 stars">
              ★
            </a>
            <a href="#1" title="Give 1 star">
              ★
            </a>
          </div>
        </div>
        <div className={classes.content}>
          <h5>
            {props.postDay} {MONTH_NAMES[props.postMonth - 1]} {props.postYear}
          </h5>
          <p>{props.postText}</p>
        </div>
      </div>
    </>
  );
};

export default PopUp;
