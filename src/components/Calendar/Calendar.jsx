import axios from "axios";
import { useEffect, useState } from "react";
import { DAYS_IN_WEEK, PostObject, WEEKS_IN_YEAR } from "../../utils/constants";
import { generateDateMatrix } from "../../utils/operations";
import classes from "./Calendar.module.scss";
import Month from "./Month";
import Tile from "./Tile";

const Calendar = (props) => {
  const [postImg, setPostImg] = useState(null);
  const [postMonth, setPostMonth] = useState(null);
  const [postDay, setPostDay] = useState(null);
  const [postData, setPostData] = useState({});
  const [postText, setPostText] = useState(null);
  const [postYear, setPostYear] = useState(null);

  useEffect(() => {
    axios
      .post("http://devapi.quinn.care/graph", PostObject)
      .then((response) => {
        let fullTime =
          response.data.responseobjects[0].posts[0].calendardatetime;
        setPostYear(+fullTime.substr(0, 4));
        setPostMonth(+fullTime.substr(5, 2));
        setPostDay(+fullTime.substr(8, 2));
        setPostImg(response.data.responseobjects[0].posts[0].media[0].mediaurl);
        setPostText(response.data.responseobjects[0].posts[0].text);
        setPostData({ ...response.data });
      });
  }, []);

  const calendarMatrix = generateDateMatrix(props.activeMonth);
  const firstDayOfMonth = [];
  const weekRows = [];
  let currentMonth = 1;
  let monthRow = [];

  for (let weekNumber = 0; weekNumber < WEEKS_IN_YEAR; weekNumber++) {
    let weekRow = [];
    for (let dayNumber = 0; dayNumber < DAYS_IN_WEEK; dayNumber++) {
      if (calendarMatrix[weekNumber][dayNumber][0] === 1) {
        firstDayOfMonth.push(weekNumber);
      }
      weekRow.push(
        <Tile
          postText={postText}
          postMonth={postMonth}
          postImg={postImg}
          postDay={postDay}
          postYear={postYear}
          postData={postData}
          key={Math.random()}
          value={calendarMatrix[weekNumber][dayNumber][0]}
          day={dayNumber}
          month={firstDayOfMonth.length}
          activeMonth={calendarMatrix[weekNumber][dayNumber][1]}
        />
      );
    }
    weekRows.push(
      <div key={Math.random()} className={classes.Week}>
        {weekRow}
      </div>
    );
  }

  const monthRows = Array(WEEKS_IN_YEAR)
    .fill(0)
    .map((_, index) => {
      if (index === firstDayOfMonth[currentMonth]) {
        const monthValue = (
          <Month
            key={Math.random()}
            monthId={currentMonth - 1}
            onVisible={props.setActiveMonth}
          >
            {monthRow}
          </Month>
        );
        currentMonth++;
        monthRow = [weekRows[index]];
        return monthValue;
      } else {
        monthRow.push(weekRows[index]);
      }
      return true;
    });

  return monthRows;
};

export default Calendar;
