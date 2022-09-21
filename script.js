function showTime(){

var date=new Date();
var h=date.getHours();
var m=date.getMinutes();
var s=date.getSeconds();

document.getElementById("MyClockDisplay").innerHTML=h+":"+m+":"+s;

setTimeout(showTime,1000);
}
showTime();