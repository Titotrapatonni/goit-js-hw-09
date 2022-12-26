const bodyEl = document.querySelector('body');
const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');
stopBtn.disabled = true;
let intervalId = null;

startBtn.addEventListener('click', onStartBtnClick);
stopBtn.addEventListener('click', onStopBtnClick);

function onStartBtnClick() {
  intervalId = setInterval(() => {
    bodyEl.style.backgroundColor = getRandomHexColor();
  }, 1000);
  toggleBtn(startBtn, stopBtn);
}

function onStopBtnClick() {
  clearInterval(intervalId);
  toggleBtn(stopBtn, startBtn);
}

function toggleBtn(activeBtn, disBtn) {
  activeBtn.setAttribute('disabled', 'true');
  disBtn.removeAttribute('disabled');
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
