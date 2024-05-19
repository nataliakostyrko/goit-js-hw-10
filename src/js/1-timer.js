import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css'

const startBtn = document.querySelector("[data-start]");
const dateInput = document.querySelector("#datetime-picker");
const timer = document.querySelector('.timer');
const dataDays = document.querySelector("[data-days]");
const dataHours = document.querySelector("[data-hours]");
const dataMinutes = document.querySelector("[data-minutes]");
const dataSeconds = document.querySelector("[data-seconds]");

let userSelectedDate;
let timerInterval;

startBtn.addEventListener("click", () => {
    startBtn.disabled = true;
    dateInput.disabled = true;

  timerInterval = setInterval(() => {
    const now = new Date(dateInput.value)- Date.now();
    if (now<= 0) {
      clearInterval(timerInterval);
      timeOutput({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      startBtn.disabled = false;
      dateInput.disabled = false;
      return;
    }
    
    timeOutput(convertMs(now));
  }, 1000);
});
  const timeOutput = ({ days, hours, minutes, seconds }) => {
  dataDays.textContent =  String(days).padStart(2, '0');
  dataHours.textContent = String(hours).padStart(2, '0');
  dataMinutes.textContent = String(minutes).padStart(2, '0');
  dataSeconds.textContent = String(seconds).padStart(2, '0');
};

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    userSelectedDate = selectedDates[0];
    const currentDate = Date.now();
    checkSelectedDate();   
  },
};

flatpickr(dateInput, options);

function checkSelectedDate() {
  const now = new Date();
  if (userSelectedDate <= now) {
    startBtn.disabled = true;
    iziToast.error({
        title: 'Error',
        message: 'Please choose a date in the future',
        position: 'topCenter',
        color: "#ADFF2F"
      
    });
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
console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20

