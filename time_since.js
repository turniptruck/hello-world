var ab = new Date();
ab.setDate(10);
ab.setMonth(7);
ab.setFullYear(2019);
ab.setHours(11);
ab.setMinutes(51);

var now = new Date();
var ts = now - ab;
var weeks = Math.floor(ts/1000/3600/24/7);
var days = Math.floor(ts/1000/3600/24)-weeks*7;
alert(`It has been ${weeks} and ${days} since she was lost.
