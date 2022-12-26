// Описан в документации
import flatpickr from 'flatpickr';
// Дополнительный импорт стилей
import 'flatpickr/dist/flatpickr.min.css';

import { Notify } from 'notiflix/build/notiflix-notify-aio';

const startBtn = document.querySelector('button[data-start]');
const timerDays = document.querySelector('span[data-days]');
const timerHours = document.querySelector('span[data-hours]');
const timerMinutes = document.querySelector('span[data-minutes]');
const timerSeconds = document.querySelector('span[data-seconds]');
startBtn.disabled = true;
startBtn.addEventListener('click', onClick);
function onClick(evt) {
  const intervalId = setInterval(() => {
    const parsedTime = convertMs(finalTime - new Date());
    timerDays.textContent = addLeadingZero(parsedTime.days);
    timerHours.textContent = addLeadingZero(parsedTime.hours);
    timerMinutes.textContent = addLeadingZero(parsedTime.minutes);
    timerSeconds.textContent = addLeadingZero(parsedTime.seconds);

    if (Object.values(parsedTime).every(value => value === 0)) {
      clearInterval(intervalId);
    }
  }, 1000);
}
function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}
let finalTime = null;
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    finalTime = new Date(selectedDates[0].getTime());
    console.log(finalTime);
    if (finalTime <= new Date()) {
      // window.alert('Please choose a date in the future');
      Notify.failure('Please choose a date in the future');
      startBtn.disabled = true;
    } else {
      startBtn.disabled = false;
    }
  },
};

const inputEl = document.querySelector('input#datetime-picker');
flatpickr(inputEl);
console.log(flatpickr(inputEl, options));
function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}
