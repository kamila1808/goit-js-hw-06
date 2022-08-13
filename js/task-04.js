let counterValue = 0;
 
const decrement = document.querySelector("[data-action = 'decrement']");
const increment = document.querySelector("[data-action = 'increment']");
const value = document.querySelector("#value");

function onDecrement() {
    counterValue -= 1;
    value.textContent = counterValue;

}

function onIncrement() {
    counterValue += 1;
    value.textContent = counterValue;
}

decrement.addEventListener("click", onDecrement);
increment.addEventListener("click", onIncrement);