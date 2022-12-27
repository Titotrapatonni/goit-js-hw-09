const formEl = document.querySelector('.form');
const delayEl = document.querySelector('input[name=delay]');
const stepEl = document.querySelector('input[name=step]');
const amountEl = document.querySelector('input[name=amount]');
let position = 0;
let delay = Number(delayEl.value);
let step = 0;

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;

  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve('Supergood');
      } else {
        reject('wff');
      }

      // console.log(position);

      // console.log(promise);
    }, delay);
  });

  promise
    .then(({ position, delay }) => {
      console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
    })
    .catch(({ position, delay }) => {
      console.log(`❌ Rejected promise ${position} in ${delay}ms`);
    })
    .finally(() => {
      console.log('finally');
      // delay = Number(delayEl.value) + step;
      console.log(promise);
    });
}

formEl.addEventListener('submit', onSubmit);

function onSubmit(evt) {
  evt.preventDefault();
  position = 0;
  step = 0;
  delay = Number(delayEl.value);
  console.log('Submit');
  for (let i = 1; i <= amountEl.value; i += 1) {
    position += 1;
    step += Number(stepEl.value);
    createPromise(position, delay);
    delay = Number(delayEl.value) + step;
  }
}
