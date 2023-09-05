import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';

const inputEl = document.querySelector("#datetime-picker");
const startBtn = document.querySelector("[data-start]");
const secEl = document.querySelector("[data-seconds]");
const minEl = document.querySelector("[data-minutes]");
const hourEl = document.querySelector("[data-hours]");
const dayEl = document.querySelector("[data-days]");

startBtn.disabled = true;
const options = {
	enableTime: true,
	time_24hr: true,
	defaultDate: new Date(),
	minuteIncrement: 1,
	onClose(selectedDates) {
		if (selectedDates[0] <= new Date()) {
			Notiflix.Notify.failure ("Please choose a date in the future");

		} else { startBtn.disabled = false; }
	},
};
const fp = flatpickr(inputEl, options);
let timerId = null;

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

const addLeadingZero = (value) => {
	return String(value).padStart(2, 0);
}

function fillFilds(timeObj) {
	dayEl.textContent = addLeadingZero(timeObj.days);
	hourEl.textContent = addLeadingZero(timeObj.hours);
	minEl.textContent = addLeadingZero(timeObj.minutes);
	secEl.textContent = addLeadingZero(timeObj.seconds)
};

const countdown = () => {
	const selectedDate = fp.selectedDates[0];
	inputEl.disabled = true;
	startBtn.disabled=true;
	timerId = setInterval(() => {
		const startTime = new Date();
		const count = selectedDate - startTime;
		const timeObject = new Object (convertMs(count));
		fillFilds(timeObject);
		if (count < 1000) {
			clearInterval(timerId);
			inputEl.disabled = false;
			startBtn.disabled =false;
		}
	}, 1000);

}
startBtn.addEventListener("click", countdown)
