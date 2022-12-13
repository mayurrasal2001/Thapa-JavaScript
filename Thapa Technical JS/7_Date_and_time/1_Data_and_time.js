/* There Are four ways to create the Date objects

new Date()

new Date(year, month, day, hours, minutes, seconds,milliseconds)

new Date(nilliseconds)
we cannot avoid the month section

new Date(date string)

*/

// let currdate = new Date();
// console.log(currdate);


// console.log(new Date());


// console.log(new Date().toLocaleString());       //for only Date and time
// console.log(new Date().toString());             //the time which are display at browser console that shows here by using toString()

// console.log(Date.now());   //it will return the miliseconds since 1 jan 1970


// //javascript month start from 0  jan=0 Dec=11


// //for set the date individually
// var d = new Date(2022,10,28,11,49,20,0);
// console.log(d.toLocaleString());


// var d = new Date(2022,2);    //month field in mandatory
// console.log(d.toLocaleString());


// var m = new Date("November 28, 2022 11:57:00");
// console.log(m.toLocaleString());


// var n = new Date(1669617220976);
// var m = new Date(0);
// console.log(n.toLocaleString());
// console.log(m.toLocaleString());
// console.log(Date.now());


// //how to get the individual Date
// const curDate = new Date();
// console.log(curDate.toLocaleString());
// console.log(curDate.getFullYear());
// console.log(curDate.getMonth());
// console.log(curDate.getDate());
// console.log(curDate.getDay());
// console.log(curDate.getMinutes());
// console.log(curDate.getMilliseconds());


// // how to set the individual Date

// var curDate = new Date();
// console.log(curDate.setFullYear(2022));
// console.log(curDate.setFullYear(2022,10,5,10,5,25));
// console.log(curDate.setMonth(10));
// console.log(curDate.setDate(28));
// console.log(curDate.toLocaleString());


// const curTime = new Date();
// console.log(curTime.getTime());   //returns the miliseconds from th 1 jan 1970
// console.log(curTime.getHours());
// console.log(curTime.getMinutes());
// console.log(curTime.getSeconds());
// console.log(curTime.getMilliseconds());


