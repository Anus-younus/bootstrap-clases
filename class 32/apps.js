var randomvalues = "Abcdefghijkl)(ompdn";
var pasword = "";
for (var i = 0; i < 10; i++) {
  var randomNumaber = Math.round(Math.random() * randomvalues.length);
  console.log(randomNumaber);
  console.log(randomvalues[randomNumaber], randomNumaber, randomvalues.length);
  pasword += randomvalues[randomNumaber];
}
console.log(pasword);
pass[0].charCodeAt();
var date = new Date();
var dayNames = ["Sun", "Mon", "Tue", "Thu", "Fri", "Sat"];
console.log(dayNames[date.getDay()]);
console.log(date.toString().slice(0, 15));
date.getMonth();
date.getFullYear();
date.getDate;
date.getHours();
date.getMinutes();
var date = new Date("29 jun 1980");
var dayNames = ["Sun", "Mon", "Tue", "Thu", "Fri", "Sat"];
console.log(dayNames[date.getDay()]);
console.log(new Date("12/01/2000"));