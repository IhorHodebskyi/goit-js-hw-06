const inputEl = document.querySelector("#font-size-control");
const textEl = document.querySelector("#text");
inputEl.addEventListener("mousemove", inputChange);

function inputChange(event) {
  textEl.style.fontSize = `${event.currentTarget.value}px`;
}
