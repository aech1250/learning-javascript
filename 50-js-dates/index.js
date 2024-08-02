/*
    Date Object => Objects that contains value that represent data and times.
                   These date object can be changed and formatted.
*/
/*------------------------------------------------------------------------------------*/
// const date1 = new Date();
// const date2 = new Date(2024, 0, 1, 12, 15, 12, 5);
// const date3 = new Date("2024-01-14T12:15:12.005Z");
// const date4 = new Date(0); // Time at Epic
// const date5 = new Date(1700000000000); // 170 billion milliseconds after the Epic

// console.log(date1);
// console.log(date2);
// console.log(date3);
// console.log(date4);
// console.log(date5);
/*------------------------------------------------------------------------------------*/
// const date = new Date();

// const year = date.getFullYear();
// const month = date.getMonth();
// const day = date.getDate();
// const hours = date.getHours() % 12;
// const minutes = date.getMinutes();
// const seconds = date.getSeconds();
// const dayOfWeek = date.getDay();

// console.log(year);
// console.log(month);
// console.log(day);
// console.log(hours);
// console.log(minutes);
// console.log(seconds);
// console.log(dayOfWeek);
/*------------------------------------------------------------------------------------*/ 
const date = new Date();

date.setFullYear(2003);
date.setMonth(8);
date.setDate(17);

console.log(date);