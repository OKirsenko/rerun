const daysEl = document.querySelector('#days');
const hoursEl = document.querySelector('#hours');
const minutesEl = document.querySelector('#minutes');
const secondsEl = document.querySelector('#seconds');

const countDownDate = new Date('May 11, 2023 00:00:00').getTime();

const intervalId = setInterval(() => {
  const timeNow = new Date().getTime();
  const distance = countDownDate - timeNow;
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);
  const time = { days, hours, minutes, seconds };
  markupTimer(time);
}, 1000);

function markupTimer(time) {
  daysEl.innerHTML = time.days;
  hoursEl.innerHTML = time.hours;
  minutesEl.innerHTML = time.minutes;
  secondsEl.innerHTML = time.seconds;
}
