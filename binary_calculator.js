//File originally written by Miguel Nunez
//File updated by Serne Alraziqi
//date modified: 5/8/2024


calculateTime = () => {
  // Create a Date object for current time in Dubai
  var date = new Date().toLocaleString("en-US", {timeZone: "Asia/Dubai"});
  var dubaiDate = new Date(date);
  
  var dayNumber = dubaiDate.getDay();
  var hour = dubaiDate.getHours();
  var minute = dubaiDate.getMinutes();
  var ampm = hour >= 12 ? 'PM' : 'AM';
  var dayNames = ["SUN", "MON", "TUE", "WED", "THU","FRI", "SAT"];

  hour = hour % 12;
  hour = hour ? hour : '12';
  hour = hour < 10 ? '0' + hour : hour;
  minute = minute < 10 ? '0' + minute : minute;

  document.querySelector("#day").textContent = dayNames[dayNumber];
  document.querySelector("#hour").textContent = hour;
  document.querySelector("#minute").textContent = minute;
  document.querySelector("#ampm").textContent = ampm;

  setTimeout(calculateTime, 200);
}

window.addEventListener('load', calculateTime)
