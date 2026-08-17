document.addEventListener("DOMContentLoaded", function () {
  var yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  var COUNTDOWN_KEY = "floorcore_launch";
  var DAYS = 25;
  var target = localStorage.getItem(COUNTDOWN_KEY);

  if (!target) {
    target = String(Date.now() + DAYS * 24 * 60 * 60 * 1000);
    localStorage.setItem(COUNTDOWN_KEY, target);
  }
  target = parseInt(target, 10);

  var daysEl = document.getElementById("cd-days");
  var hoursEl = document.getElementById("cd-hours");
  var minsEl = document.getElementById("cd-mins");
  var secsEl = document.getElementById("cd-secs");

  if (!daysEl) return;

  function pad(n) {
    return String(n).padStart(2, "0");
  }

  function tick() {
    var diff = target - Date.now();
    if (diff < 0) diff = 0;
    var total = Math.floor(diff / 1000);
    var d = Math.floor(total / 86400);
    var h = Math.floor((total % 86400) / 3600);
    var m = Math.floor((total % 3600) / 60);
    var s = total % 60;

    daysEl.textContent = d;
    hoursEl.textContent = pad(h);
    minsEl.textContent = pad(m);
    secsEl.textContent = pad(s);
  }

  tick();
  setInterval(tick, 1000);
});