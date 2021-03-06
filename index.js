const refs = {
  modalAge: document.querySelector('.js-modal-age'),
  modalAgeCloseBtn: document.querySelector('.js-age-close'),
  modalOpenBtn: document.querySelector('.js-modal-open'),
  modalCloseBtn: document.querySelector('.js-modal-close'),
  modal: document.querySelector('.js-modal'),
  mofalForm: document.querySelector('.js-form'),
  hoverEl: document.querySelectorAll('.js-hover'),
};

refs.modalAgeCloseBtn.addEventListener('click', closeModalAge);
refs.modalOpenBtn.addEventListener('click', toggleModal);
refs.modalCloseBtn.addEventListener('click', toggleModal);
refs.mofalForm.addEventListener('submit', onFormSubmit);
refs.modalOpenBtn.addEventListener('mouseenter', onHover);
refs.modalOpenBtn.addEventListener('mouseleave', onHover);

function closeModalAge() {
  document.body.classList.remove('blocked-body');
  refs.modalAge.classList.add('is-hidden');
}

function toggleModal() {
  document.body.classList.toggle('blocked-body');
  refs.modal.classList.toggle('is-hidden');
}

function onFormSubmit(e) {
  e.preventDefault();
  toggleModal();
}

function onHover() {
  refs.hoverEl.forEach(el => el.classList.toggle('wrap-hover'));
}

const daysEl = document.querySelector('#days');
const hoursEl = document.querySelector('#hours');
const minutesEl = document.querySelector('#minutes');
const secondsEl = document.querySelector('#seconds');

const countDownDate = new Date('May 05, 2023 00:00:00').getTime();

const intervalId = setInterval(() => {
  const timeNow = new Date().getTime();
  const distance = countDownDate - timeNow;

  const time = converTime(distance);
  const formatTime = addLeadingZero(time);
  markupTimer(formatTime);
  if (distance < 0) {
    clearInterval(intervalId);
    daysEl.innerHTML = '00';
    hoursEl.innerHTML = '00';
    minutesEl.innerHTML = '00';
    secondsEl.innerHTML = '00';
  }
}, 1000);

function markupTimer(time) {
  daysEl.innerHTML = time.days;
  hoursEl.innerHTML = time.hours;
  minutesEl.innerHTML = time.minutes;
  secondsEl.innerHTML = time.seconds;
}

function converTime(ms) {
  const days = Math.floor(ms / (1000 * 60 * 60 * 24));
  const hours = Math.floor((ms % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((ms % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((ms % (1000 * 60)) / 1000);
  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  const days = String(value.days).padStart(2, 0);
  const hours = String(value.hours).padStart(2, 0);
  const minutes = String(value.minutes).padStart(2, 0);
  const seconds = String(value.seconds).padStart(2, 0);
  return { days, hours, minutes, seconds };
}
