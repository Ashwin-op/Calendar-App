import { getMonthsInYear } from "./operations";

export const MONTHS_IN_YEAR = 12;
export const WEEKS_IN_YEAR = 54;
export const DAYS_IN_WEEK = 7;
export const DATE = new Date();
export const DAYS_IN_MONTH = getMonthsInYear(DATE.getFullYear());
export const DAY_NAMES = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
export const MONTH_NAMES = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "Decemeber",
];

export const PostObject = {
  requestobjects: [
    {
      posts: {
        operationtype: "read",
        id: {
          return: true,
        },
        userid: {
          searchvalues: ["41329663-5834-11eb-8e6e-3ca82abc3dd4"],
          return: true,
        },
        iscalendarentry: {
          searchvalues: ["true"],
          return: true,
        },
        media: {
          return: true,
        },
        rating: {
          return: true,
        },
        text: {
          return: true,
        },
        privacy: {
          searchvalues: [18],
          return: true,
        },
        typeofday: {
          return: true,
        },

        // Don't change anything above ^^
        //editable variables start below //

        calendardatetime: {
          // Date Time of a particular post
          return: true, // please note: there can be multiple posts on a single day
          sort: "descending", // you can sort fetched dates by ascending/descending.
        },
        maxitemcount: "20", //you can ask between 1 to 50 posts (max) at a time.
        continuationtoken: null, //replace with the continuation token from response to get the next set
      },
    },
  ],
};
