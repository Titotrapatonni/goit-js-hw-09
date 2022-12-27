import { Notify } from 'notiflix/build/notiflix-notify-aio';

const formEl = document.querySelector('.form');
const delayEl = document.querySelector('input[name=delay]');
const stepEl = document.querySelector('input[name=step]');
const amountEl = document.querySelector('input[name=amount]');
formEl.addEventListener('submit', onSubmit);

function onSubmit(evt) {
  evt.preventDefault();
  if (
    Number(delayEl.value) < 0 ||
    Number(stepEl.value) < 0 ||
    Number(amountEl.value) < 0
  ) {
    Notify.warning('Value cannot be negative');
    return;
  }
  let position = 0;
  let step = 0;
  let delay = Number(delayEl.value);
  for (let i = 1; i <= amountEl.value; i += 1) {
    position += 1;
    step += Number(stepEl.value);
    createPromise(position, delay);
    delay = Number(delayEl.value) + step;
  }
}

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve(`Fulfilled promise ${position} in ${delay}ms`);
      } else {
        reject(`Rejected promise ${position} in ${delay}ms`);
      }
    }, delay);
  });
  promise
    .then(value => {
      Notify.success(value);
    })
    .catch(err => {
      Notify.failure(err);
    });
}
