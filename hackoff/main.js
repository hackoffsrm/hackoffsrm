const { time } = require("console");
const { setInterval } = require("timers");

function getvalues(e) {
  while (true) {
    if (e.stime.value > e.sstime.value) {
      var d = new Date();
      var hrs = d.getHours();
      var mins = d.getMinutes();
      var sec = d.getSeconds();
      total_sec = hrs * 3600 + mins * 60 + sec
      var hms = String(e.stime.value)
      var a = hms.split(':')
      var seconds = (a[0]) * 60 * 60 + (a[1]) * 60;
      if (seconds == total_sec) {
        alert('yo')
      }
    }
    else {
      var d = new Date();
      var hrs = d.getHours();
      var mins = d.getMinutes();
      var sec = d.getSeconds();
      total_sec = hrs * 3600 + mins * 60 + sec
      var hms = String(e.sstime.value)
      var a = hms.split(':')
      var seconds = (a[0]) * 60 * 60 + (a[1]) * 60;
      if (seconds == total_sec) {
        $.get("http://192.168.4.1:80/", {pin:p});
      }
    }
  }
}