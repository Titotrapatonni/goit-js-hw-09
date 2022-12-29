import { Notify } from 'notiflix/build/notiflix-notify-aio';

const formEl = document.querySelector('.form');

formEl.addEventListener('submit', onSubmit);

function onSubmit(evt) {
  evt.preventDefault();
  const {
    elements: { delay, step, amount },
  } = evt.currentTarget;

  // if (
  //   Number(delay.value) < 0 ||
  //   Number(step.value) < 0 ||
  //   Number(amount.value) < 0
  // ) {
  //   Notify.warning('Value cannot be negative');
  //   return;
  // }
  let position = 0;
  let nextStep = 0;
  let nextDelay = Number(delay.value);
  for (let i = 1; i <= amount.value; i += 1) {
    position += 1;
    nextStep += Number(step.value);
    createPromise(position, nextDelay)
      .then(({ position, delay }) => {
        Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
      });
    nextDelay = Number(delay.value) + nextStep;
  }
}

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}
