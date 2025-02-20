import { NumberFlip } from "../index";
const numberFlip1 = new NumberFlip({
  rootElement: document.getElementById("number-flip-1"),
});
console.log("numberFlip1", numberFlip1);
function setRandomNumber() {
  const randomNumber = Math.floor(Math.random() * 1000000);
  numberFlip1.setNumber(randomNumber);
}

// Set initial random number and update every second
setRandomNumber();
// setInterval(setRandomNumber, 50000);
// setTimeout(() => {
//   setRandomNumber();
// }, 5000);

// Example 2: Manually set number (existing code)
const numberFlip2 = new NumberFlip({
  rootElement: document.getElementById("number-flip-2"),
  initialNumber: 7198502,
  animateInitialNumber: false,
});

const numberInput = document.getElementById("number-input");

function changeNumber() {
  const newNumber = numberInput.value;
  numberFlip2.setNumber(newNumber, true);
}

const button = document.getElementById("button");
button.addEventListener("click", changeNumber);
