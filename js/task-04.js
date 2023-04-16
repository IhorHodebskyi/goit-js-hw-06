const refs = {
  decrement: document.querySelector('button[data-action="decrement"]'),
  span: document.querySelector("#value"),
  increment: document.querySelector('button[data-action="increment"]'),
};

let counterValue = 0;

refs.decrement.addEventListener("click", onDecrement);
refs.increment.addEventListener("click", onIncrement);

function onDecrement() {
  refs.span.textContent = counterValue -= 1;
}

function onIncrement() {
  refs.span.textContent = counterValue += 1;
}
