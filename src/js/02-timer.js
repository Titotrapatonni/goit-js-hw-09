import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    finalTime = new Date(selectedDates[0].getTime());

    checkTime(finalTime, new Date());
  },
};

const inputEl = document.querySelector('input#datetime-picker');
const startBtn = document.querySelector('button[data-start]');
const timerDays = document.querySelector('span[data-days]');
const timerHours = document.querySelector('span[data-hours]');
const timerMinutes = document.querySelector('span[data-minutes]');
const timerSeconds = document.querySelector('span[data-seconds]');
let finalTime = null;
flatpickr(inputEl, options);

startBtn.disabled = true;
startBtn.addEventListener('click', onClick);

function onClick(evt) {
  startBtn.disabled = true;
  const intervalId = setInterval(() => {
    const parsedTime = convertMs(finalTime - new Date());
    setTimerValues(parsedTime);

    timerOut(parsedTime, intervalId);
  }, 1000);
}

function setTimerValues({ days, hours, minutes, seconds }) {
  timerDays.textContent = addLeadingZero(days);
  timerHours.textContent = addLeadingZero(hours);
  timerMinutes.textContent = addLeadingZero(minutes);
  timerSeconds.textContent = addLeadingZero(seconds);
}

function timerOut(difTime, intervalId) {
  if (Object.values(difTime).every(value => value === 0)) {
    clearInterval(intervalId);
    Notify.success('The choosen date has come');
  }
}
function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

function checkTime(final, current) {
  if (final <= new Date()) {
    Notify.failure('Please choose a date in the future');
    startBtn.disabled = true;
  } else {
    startBtn.disabled = false;
  }
}

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}
