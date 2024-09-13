const times = document.getElementById("time");
const am = document.getElementById("am");

document.addEventListener("DOMContentLoaded", () => {
  setInterval(showtime, 1000);
});
let showtime = () => {
  let date = new Date();

  let hr = date.getHours();
  let min = date.getMinutes();
  let sec = date.getSeconds();

  // hr = hr>=10 ? 0${hr}  : hr;
  // min= min>=10 ? 0${min}  : min;
  // sec = sec>=10 ? 0${sec}  : sec;

  times.innerHTML = `${hr}  : ${min} : ${sec}`;
  am.innerHTML = hr > 12 ? "PM" : "AM";
};
